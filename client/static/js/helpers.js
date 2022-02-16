const postStory = (e) => {
  e.preventDefault();
  console.log(e.target);
  const title = e.target.querySelector("#form_title").value;
  const name = e.target.querySelector("#form_name").value;
  const story = e.target.querySelector("#form_story").value;

  console.log(title, name, story);
};

module.exports = { postStory };
