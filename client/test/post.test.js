/**
 * @jest-environment jsdom
 */
const { createPost, exportedForTesting } = require("../static/js/post");
const { createTitle, createName, createStory } = exportedForTesting;
describe("Loading in the post:", () => {
  describe("createTitle Function:", () => {
    let titleElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createTitle("Dr"));
      titleElem = document.querySelector("#form_title");
    });
    it("returns an element with id form_title", () => {
      expect(titleElem).not.toBe(null);
    });
    it("it has inner text of Dr", () => {
      expect(titleElem.innerText).toBe("Dr");
    });
  });

  describe("createName Function:", () => {
    let nameElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createName("Nicholas Riviera"));
      nameElem = document.querySelector("#form_name");
    });
    it("returns an element with id form_title", () => {
      expect(nameElem).not.toBe(null);
    });
    it("it has inner text of Nicholas Riviera", () => {
      expect(nameElem.innerText).toBe("Nicholas Riviera");
    });
  });

  describe("createStory Function:", () => {
    let storyElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createStory("Hi, everybody!"));
      storyElem = document.querySelector("#form_story");
    });
    it("returns an element with id form_title", () => {
      expect(storyElem).not.toBe(null);
    });
    it("it has inner text of Hi, everybody!", () => {
      expect(storyElem.innerText).toBe("Hi, everybody!");
    });
  });

  describe("createPost Function:", () => {
    let postElem;
    let nameDiv;
    beforeEach(() => {
      document.body.innerHTML = ``;
      createPost();
      postElem = document.querySelector(".post");
      nameDiv = postElem.querySelector(".name_div");
    });
    it("returns something with a class of post", () => {
      expect(postElem).not.toBe(null);
    });
    it("has 4 child nodes", () => {
      expect(postElem.childNodes.length).toBe(2);
    });
    it("has child of name div which has two children", () => {
      expect(nameDiv.childNodes.length).toBe(2);
    });
  });
});
