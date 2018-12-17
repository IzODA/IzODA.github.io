#IzODA Anaconda Packages
The following are the packages provided by the [IzODA Anaconda Channel.](https://anaconda.org/izoda)

<div class="table-responsive">
  <table border="1px solid black" class="table table-hover dataTable package-options-table">
    <thead>
      <tr>
        <td>
          <span>Label/Release Level: </span>
          <select id="packageSelect" onchange="labelChange()" class="ds-select">
            <option id="latestPackageSelect">main</option>
          </select>
        </td>
        <td>
          <input oninput="searchBoxChange()" id="searchBox" placeholder="Search packages"
            class="search-box"></input>
        </td>
        <td>
          <button id="generateButton" onclick="generateInstallScript();" class="btn btn-light btn-outline-dark">Generate Environment Script</button>
        </td>
      </tr>
    </thead>
  </table>
</div>

<table border="1px solid black" id="packageTable" class="dataTable">
  <tr>
    <th>Package</th>
    <th>Version</th>
    <th>License</th>
    <th>Description</th>
  </tr>
  <!-- start of anaconda table contents -->
  <!-- end of anaconda table contents -->
</table>
