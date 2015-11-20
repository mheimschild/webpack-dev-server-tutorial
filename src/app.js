require("./style.less");

var content = document.getElementById("content");

content.innerHTML = "It's working... 1";

if (module.hot) {
  module.hot.accept();
}