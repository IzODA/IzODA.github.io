#IzODA Anaconda Packages
The following are the packages provided by the [IzODA Anaconda Channel.](https://anaconda.org/izoda)

<table border="1px solid black" id="packageTable" class="dataTable">
  <thead>
    <tr>
      <td>
        <input 
          oninput="searchBoxChange()" 
          id="searchBox" 
          placeholder="Search packages"
          class="search-box">
        </input>
      </td>
      <td colspan="2">
        <span>Label/Release Level: </span>
        <select id="packageSelect" onchange="labelChange()" class="ds-select">
          <option id="latestPackageSelect">main</option>
        </select>
      </td>
      <td>
        <span>Language / Tool: </span>
        <select id="languageSelect" onchange="languageChange()" class="ds-select">
          <option>Select</option>
          <option id="python">Python</option>
          <option id="r">R-lang</option>
          <option id="tool">Tool</option>
        </select>
      </td>
      <td colspan="2">
        <button id="generateButton" onclick="generateInstallScript();" class="btn btn-light btn-outline-dark">Generate Environment Script</button>
      </td>
    </tr>
  </thead>
  <tbody id="packageTableBody">
    <!-- start of anaconda table contents -->
    <!-- end of anaconda table contents -->
  </tbody>
</table>
