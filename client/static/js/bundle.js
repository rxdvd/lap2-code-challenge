(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { handleSubmit } = require("./helpers");

// A function to generate the text input for posts
const createInput = (placeholder) => {
  const input = document.createElement("input");
  input.classList.add("form_control", "form_text");
  input.id = `form_${placeholder.toLowerCase().slice(0, -1)}`;
  input.type = "text";
  input.placeholder = placeholder;

  return input;
};
// A function to create the text area part for posts
const createTextarea = () => {
  const textarea = document.createElement("textarea");
  textarea.classList.add("form_control", "form_text");
  textarea.id = "form_story";
  textarea.cols = 30;
  textarea.rows = 12;
  textarea.placeholder = "Story:";
  textarea.maxLength = 300;

  return textarea;
};
// A function to generate the submit input for posts
const createSubmit = () => {
  const input = document.createElement("input");
  input.classList.add("form_control", "form_btn");
  input.id = "form_submit";
  input.type = "submit";
  input.value = "publish";

  return input;
};
// A function to generate the from
const createForm = () => {
  const body = document.querySelector("body");

  const form = document.createElement("form");
  form.classList.add("form");
  form.appendChild(createInput("Title:"));
  form.appendChild(createInput("Name:"));
  form.appendChild(createTextarea());
  form.appendChild(createSubmit());
  form.addEventListener("submit", handleSubmit);

  body.appendChild(form);
};

module.exports = { createForm };

},{"./helpers":2}],2:[function(require,module,exports){
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

module.exports = { handleSubmit };

},{}],3:[function(require,module,exports){
const { createForm } = require("./form");

createForm();

},{"./form":1}]},{},[3]);
