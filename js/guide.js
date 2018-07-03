var url = window.location.href;
var frameURL = url.split("?");

if (frameURL[1] == "aic") {
  document.getElementById("iframe1").src = "https://izoda.github.io/site/anaconda/install-config/";
}