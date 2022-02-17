const { createForm } = require("./form");
const { updateContent } = require("./helpers");

//if (!location.hash) {
  createForm();
//} else {
//  updateContent();
//}

window.addEventListener("hashchange", updateContent);
