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
  });
});
