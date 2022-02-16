const { createForm } = require("./form");
const { updateContent } = require("./helpers");

createForm();
window.addEventListener("hashchange", updateContent);
