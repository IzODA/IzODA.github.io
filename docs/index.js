// Change top-left Home Link to IzODA Home
var homeLink = document.getElementsByClassName("icon-home")[0];
homeLink.href = "https://izoda.github.io";
homeLink.innerText = " IzODA Home Page";

var latestText = [];
var latestReleaseName = "LATEST";
var packageFileDir = "https://izoda.github.io/";
var labelArray = ["main"];
var table = document.getElementById("packageTable");

// This function iterates through the labels of each package and adds each label as 
// an option to the labelSelect
function addLabelOptions() {
  var labelSelect = document.getElementById("packageSelect");
  var labelArrayLength = labelArray.length;
  for (var i = 1; i < labelArrayLength; i++) {
    var labelOption = document.createElement("option");
    labelOption.text = labelArray[i];
    labelSelect.add(labelOption);
  }
}

// This function loads the package table from https://izoda.github.io/LATEST
function loadPackageTableFromFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        var splitLines = allText.split("\n");

        allText = getPackageTableHeader();

        // Table headers and index of position in LATEST file
        var packageName = 5;
        var url = 9;
        var version = 7;
        var license = 1;
        var description = 3;
        var label = 11;

        // LATEST gets split by each "," which is then pushed into an array
        for (var lineIdx = 0; lineIdx < splitLines.length; lineIdx++) {
          if (splitLines[lineIdx].length == 0)
            continue;

          var splitVals = splitLines[lineIdx].split("\"", );
          var packageArray = [splitVals[packageName], splitVals[version], splitVals[license], splitVals[description], splitVals[label], splitVals[url]];
          var labelSplit = splitVals[label].split(',');

          for (var i = 0; i < labelSplit.length; i++) {
            if (!labelArray.includes(labelSplit[i]))
              labelArray.push(labelSplit[i])
          }

          allText = allText + getPackageTableEntry(packageArray);
        }

        addLabelOptions();
        table = document.getElementById("packageTable");
        table.innerHTML = allText;
      }
    }
  }
  rawFile.send(null);
}

function getPackageTableEntry(packageArray) {
  return "<tr><td><a href=\"https://anaconda.org" + packageArray[5] + "\">" + packageArray[0] + "</a></td><td>" + packageArray[1] +
    "</td><td>" + packageArray[2] + "</td><td>" + packageArray[3] + "</td><td>" + packageArray[4] + "</td></tr>";
}

function getPackageTableHeader() {
  return "<thead>" + getPackageHeaderRow() + "</thead>";
}

function getPackageHeaderRow() {
  return "<tr><th>Package</th><th>Version</th><th>License</th><th>Description</th><th>Label</th>";
}

// This function allows users to search for package names
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

// This allows users to sort packages by labels
function labelChange() {
  var table = document.getElementById("packageTable");
  var searchText = document.getElementById("packageSelect").value.toLowerCase();
  var tr = table.tBodies[0].getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toLowerCase().includes(searchText)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Generate a conda install script using the packageName and version
function generateInstallScript() {
  var tr = table.tBodies[0].getElementsByTagName("tr");
  var script = "";
  var currentLine = "conda install";
  // Loop through all table rows and generate
  for (i = 0; i < tr.length; i++) {
    var name = tr[i].getElementsByTagName("td")[0];
    name = name.innerHTML;
    name = name.split(">");
    name = name[1].split("<")
    console.log(name);
    var version = tr[i].getElementsByTagName("td")[1];
    if (name && version) {
      if (name.innerHTML !== "conda") {
        if (currentLine.length >= 80) {
          script = script + currentLine + " \\\n";
          currentLine = "";
        }
        currentLine = currentLine + " " + name[0] + "=" + version.innerHTML.replace("v", "");
      }
    }
  }
  script = script + currentLine;
  download("condaInstall" + latestReleaseName + ".sh", script);
}

// Downloads the conda install script
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

loadPackageTableFromFile(packageFileDir + latestReleaseName);