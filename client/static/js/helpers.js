const createPost = require("./post");

const postStory = async (e) => {
  e.preventDefault();
  try {
    const title = e.target.querySelector("#form_title").value;
    const name = e.target.querySelector("#form_name").value;
    const story = e.target.querySelector("#form_story").value;

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, name, body: story }),
    };
    const response = await fetch("http://localhost:3000/posts", options);
    const { post_id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `${post_id}`;
    }
  } catch (err) {
    console.warn(err);
  }
};

const getStory = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    createPost(data.title, data.name, data.body);
  } catch (err) {
    console.warn(err);
  }
};

const updateContent = async () => {
  let hash = window.location.hash; //This returns #6
  console.log(hash);
  await getStory(hash.slice(1));
};

module.exports = { postStory, updateContent };
