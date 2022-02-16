/**
 * @jest-environment jsdom
 */
const { createForm, exportedForTesting } = require("../static/js/form");
const { createInput, createTextarea, createSubmit } = exportedForTesting;

describe("Loading in the form:", () => {
  describe("createInput Function:", () => {
    let inputElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createInput("Name:"));
      inputElem = document.querySelector("input");
    });
    it("returns an input", () => {
      expect(inputElem).not.toBe(null);
    });
    it("it sterilises the placeholder for the id", () => {
      expect(inputElem.id).toBe("form_name");
    });
  });

  describe("createTextArea Function:", () => {
    let textElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createTextarea());
      textElem = document.querySelector("textarea");
    });
    it("returns a textarea", () => {
      expect(textElem).not.toBe(null);
    });
  });

  describe("createSubmit Function:", () => {
    let submitElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      document.body.appendChild(createSubmit());
      submitElem = document.querySelector("input[type='submit']");
    });
    it("returns a submit input", () => {
      expect(submitElem).not.toBe(null);
    });
  });

  describe("createForm Function:", () => {
    let formElem;
    beforeEach(() => {
      document.body.innerHTML = ``;
      createForm();
      formElem = document.querySelector("form");
    });
    it("returns a form", () => {
      expect(formElem).not.toBe(null);
    });
    it("has 4 child nodes", () => {
      expect(formElem.childNodes.length).toBe(4);
    });
  });
});
