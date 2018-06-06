var latestText = [];
var latestReleaseName = "LATEST";
var packageFileDir = "https://izoda.github.io/anaconda/";

function loadPackageTable(compare = false) {
    setElementDisplay('comparison-view-td', 'none');
	var selectedRelease = getSelectedRelease()
	loadPackageTableFromFile(packageFileDir + selectedRelease, selectedRelease, compare);
}

function getSelectedRelease() {
    return document.getElementById("packageSelect").value;
}

function loadPackageTableFromFile(file, releaseName, compare = false, isLatest = false) {
	var rawFile = new XMLHttpRequest();
	document.getElementById("searchBox").value = "";
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
	    if(rawFile.readyState === 4)
	    {
		if(rawFile.status === 200 || rawFile.status == 0)
		{
		    var allText = rawFile.responseText;
	        var splitLines = allText.split("\n");

		    if (isLatest) {
			latestText = [];
		    }

		    var parsedText = [];

		    allText = getPackageTableHeader();
		    for (var lineIdx = 0; lineIdx < splitLines.length; lineIdx++) {
			if (splitLines[lineIdx].length == 0)
				continue;
			var splitVals = splitLines[lineIdx].split("\"", );
			var packageArray = [splitVals[1],  splitVals[3], splitVals[5], splitVals[7]];

			parsedText.push(packageArray);

			if (!compare)
				allText = allText + getPackageTableEntry(packageArray);

	            }

		    if (isLatest) {
			latestText = parsedText;
		    } else if (compare) {
			allText = comparePackageLevelWithLatest(parsedText, releaseName);
		    }

		    table = document.getElementById("packageTable");
		    table.innerHTML = allText;
		}
	    }
	}
	rawFile.send(null);
}

function getPackageTableEntry(packageArray) {
	return "<tr><td>" + packageArray[0] + "</td><td>" + packageArray[1] +
				"</td><td>" + packageArray[2] + "</td><td>" + packageArray[3] + "</td></tr>";
}

function getPackageTableHeader() {
	return "<thead>" + getPackageHeaderRow() + "</thead>";
}

function getPackageHeaderRow() {
	return "<tr><th>Package</th><th>Version</th><th>License</th><th>Description</th></tr>";
}

function comparePackageLevelWithLatest(packageList, releaseName) {
	document.getElementById("comparison-view-text").innerHTML="Comparing " + releaseName + " with " + latestReleaseName;

	var comparePackageIndex = 0;
	var compareResult = getPackageTableHeader();
	for (var packageIndex = 0; packageIndex < latestText.length; packageIndex++) {
		while (comparePackageIndex + 1 < packageList.length && latestText[packageIndex][0] > packageList[comparePackageIndex][0]) {
			packageList[comparePackageIndex][1] = packageList[comparePackageIndex][1] + " -> Removed";
			compareResult = compareResult + getPackageTableEntry(packageList[comparePackageIndex]);
			comparePackageIndex++;
		}

		if (latestText[packageIndex][0] === packageList[comparePackageIndex][0]) {
			if (latestText[packageIndex][1] !== packageList[comparePackageIndex][1]) {
				packageList[comparePackageIndex][1] = packageList[comparePackageIndex][1] + " -> " + latestText[packageIndex][1];
				compareResult = compareResult + getPackageTableEntry(packageList[comparePackageIndex]);
			}
			comparePackageIndex++;
		} else {
			var newPackageArray = latestText[packageIndex].slice();
			newPackageArray[1] = "Not included -> " + newPackageArray[1];
			compareResult = compareResult + getPackageTableEntry(newPackageArray);
		}
	}
	return compareResult;
}

function searchBoxChange() {
	var table = document.getElementById("packageTable");
	var searchText = document.getElementById("searchBox").value.toLowerCase();
	var tr = table.tBodies[0].getElementsByTagName("tr");
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			if (td.innerHTML.toLowerCase().includes(searchText)) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function setElementDisplay(elementId, display) {
	document.getElementById("comparison-view-td").style.display=display;
}

function showElement(elementId) {
    document.getElementById(elementId).classList.toggle("show");
}

function hideElement(elementId) {
    document.getElementById(elementId).classList.remove("show");
}

function generateInstallScript() {
    var table = document.getElementById("packageTable");
    var tr = table.tBodies[0].getElementsByTagName("tr");
    var script = "";
    var currentLine = "conda install";
    // Loop through all table rows and generate
    for (i = 0; i < tr.length; i++) {
        var name = tr[i].getElementsByTagName("td")[0];
        var version = tr[i].getElementsByTagName("td")[1];
        if (name && version) {
            if (name.innerHTML !== "conda") {
                if (currentLine.length >= 80) {
                    script = script + currentLine + " \\\n";
                    currentLine = "";
                }

                currentLine = currentLine + " " + name.innerHTML + "=" + version.innerHTML.replace("v", "");
            }
        }
    }
    script = script + currentLine;
    download("condaInstall" + getSelectedRelease() + ".sh", script);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

window.onclick = function(event) {
	if (event.target.id!=='optionsButton') {
		 hideElement('packageTableDropDown');
	}
}

document.getElementById("latestPackageSelect").selected = "selected";
loadPackageTableFromFile(packageFileDir + "LATEST", latestReleaseName, false, true);
