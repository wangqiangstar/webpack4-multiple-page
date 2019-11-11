import $ from "jquery";
import "normalize.css";
import "@/assets/styles/common.less";
import "./index.less";

import "./test.js";

console.log($);
console.log("index1122");
console.log("index1122");
console.log("index1122");

if (module.hot) {
  module.hot.accept("./test.js", function () {
    console.log("hot reload");
  });
}
