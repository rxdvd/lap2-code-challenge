const { postStory } = require("./helpers");

// A function to generate the text input for posts
const createInput = (placeholder) => {
  const input = document.createElement("input");
  input.classList.add("form_control", "form_text");
  input.id = `form_${placeholder.toLowerCase().slice(0, -1)}`;
  input.type = "text";
  input.placeholder = placeholder;
  input.required = true;

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
  input.require = true;

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
  form.addEventListener("submit", postStory);

  body.appendChild(form);
};

module.exports = { createForm };
