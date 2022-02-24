const { updateContent } = require("./helpers");

updateContent();

window.addEventListener("hashchange", updateContent);
