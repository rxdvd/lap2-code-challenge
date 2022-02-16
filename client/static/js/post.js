// create the title
const createTitle = (text) => {
  const div = document.createElement("div");
  div.classList.add("form_control", "form_text");
  div.id = "form_title";
  div.innerText = text;

  return div;
};
// create the name
const createName = (text) => {
  const div = document.createElement("div");
  div.classList.add("form_control", "form_text");
  div.id = "form_name";
  div.innerText = text;

  return div;
};
// create the story
const createStory = (text) => {
  const div = document.createElement("div");
  div.classList.add("form_control", "form_text");
  div.id = "form_story";
  div.innerText = text;

  return div;
};
// A function to generate the from
const createPost = (title, name, story) => {
  const body = document.querySelector("body");
  body.innerHTML = "";

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name_div");
  nameDiv.appendChild(createTitle(title));
  nameDiv.appendChild(createName(name));

  const div = document.createElement("div");
  div.classList.add("form", "post");
  div.appendChild(nameDiv);
  div.appendChild(createStory(story));

  body.appendChild(div);
};
module.exports = createPost;
