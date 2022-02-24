const { createForm } = require("./form");
const { createPost } = require("./post");

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
    const { post_id, error } = await response.json();
    if (error) {
      throw Error(error);
    } else {
      window.location.hash = `${post_id}`;
    }
  } catch (err) {
    console.warn(err);
    return err;
  }
};

const getStory = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`);
      if (response.status === 404) {
        throw new Error(
          "That card doesn't exist yet. Why don't you create your own?"
        );
      }
      const data = await response.json();
      resolve([data.title, data.name, data.body, data.timestamp]);
    } catch (err) {
      alert(err.message);
      reject(err);
    }
  });
};

const updateContent = async () => {
  try {
    let hash = window.location.hash;
    if(!hash) throw new Error();
    let response = await getStory(hash.slice(1));
    createPost(...response);
  } catch (err) {
    createForm();
    const form = document.querySelector("form");
    form.addEventListener("submit", postStory);
  }
};

const exportedForTesting = {
  getStory,
};

module.exports = { postStory, updateContent, exportedForTesting };
