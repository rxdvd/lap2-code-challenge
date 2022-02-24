/**
 * @jest-environment jsdom
 */
const {
  postStory,
  updateContent,
  exportedForTesting,
} = require("../static/js/helpers");

const { getStory } = exportedForTesting;

describe("Helper functions:", () => {
  describe("postStory Function", () => {
    let mockEvent;
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ post_id: 5 }),
        })
      );
      mockEvent = {
        preventDefault: new Function(),
        target: {
          querySelector: () => {
            return {
              value: "cat",
            };
          },
        },
      };
    });
    it("calls the fetch api", async () => {
      await postStory(mockEvent);
      expect(fetch).toHaveBeenCalled();
    });
    it("calls the post method", async () => {
      await postStory(mockEvent);
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/posts", {
        body: '{"title":"cat","name":"cat","body":"cat"}',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    });
    it("has an unhappy path", async () => {
      fetch.mockImplementationOnce(() =>
        Promise.reject("You can't post that!")
      );
      const err = await postStory(mockEvent);

      expect(err).not.toBe(null);
    });
  });
});
