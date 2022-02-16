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
      window.location.hash = `/#${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
};

const updateContent = () => {
  let hash = window.location.hash;
  console.log(hash);
};

module.exports = { postStory, updateContent };
