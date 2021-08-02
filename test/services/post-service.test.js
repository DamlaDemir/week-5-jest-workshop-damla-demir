import PostService from "../../src/services/post-service";
import PostProvider from "../../src/services/post-provider";

jest.mock("../../src/services/post-provider");

describe("PostService", () => {
  describe("GetTopPostingUser Function", () => {
    const postProvider = new PostProvider();
    const postService = new PostService(postProvider);

    it("should return top posting user title", async () => {
      //arrange
      const data = [
        {
          userId: 1,
          id: 1,
          title: "user 1 title 1",
          body: "user 1 body 1",
        },
        {
          userId: 1,
          id: 2,
          title: "user 1 title 2",
          body: "user 1 body 2",
        },
        {
          userId: 2,
          id: 3,
          title: "user 2 title 1",
          body: "user 2 body 1",
        },
      ];

      const expectedResult = [["user 1 title 1", "user 1 title 2"]];

      postProvider.getAllPosts.mockImplementation(() => {
        return Promise.resolve(data);
      });

      //act
      const actualResult = await postService.getTopPostingUser();

      //assertion
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return multiple top posting user title", async () => {
      //arrange
      const data = [
        {
          userId: 1,
          id: 1,
          title: "user 1 title 1",
          body: "user 1 body 1",
        },
        {
          userId: 1,
          id: 2,
          title: "user 1 title 2",
          body: "user 1 body 2",
        },
        {
          userId: 2,
          id: 3,
          title: "user 2 title 1",
          body: "user 2 body 1",
        },
        {
          userId: 2,
          id: 3,
          title: "user 2 title 2",
          body: "user 2 body 2",
        },
      ];

      const expectedResult = [
        ["user 1 title 1", "user 1 title 2"],
        ["user 2 title 1", "user 2 title 2"],
      ];

      postProvider.getAllPosts.mockImplementation(() => {
        return Promise.resolve(data);
      });

      //act
      const actualResult = await postService.getTopPostingUser();

      //assertion
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return error when getTopPostingUser function throw error", async () => {
      //arrange
      const expectedResult = "Error on get top posting user!";

      postProvider.getAllPosts.mockImplementation(() => {
        return Promise.reject(expectedResult);
      });

      //act
      const result = async () => await postService.getTopPostingUser();

      //assertion
      expect(result).rejects.toThrowError(expectedResult);
    });
  });
});
