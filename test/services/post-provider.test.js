import PostProvider from "../../src/services/post-provider";
import axios from "axios";

jest.mock("axios");
describe("PostProvider", () => {
  it("should return all posts", async () => {
    //arrange
    const postProvider = new PostProvider();
    const data = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 2,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        userId: 3,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut",
      },
    ];

    const expectedResult = data;

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        data: data,
      });
    });

    //act
    const actualResult = await postProvider.getAllPosts();

    //assertion
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return empty array when api response is undefined", async () => {
    //arrange
    const postProvider = new PostProvider();
    const expectedResult = [];

    axios.get.mockImplementation(() => {
      return Promise.resolve(undefined);
    });

    //act
    const actualResult = await postProvider.getAllPosts();

    //assertion
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return empty array when api response is null", async () => {
    //arrange
    const postProvider = new PostProvider();
    const expectedResult = [];

    axios.get.mockImplementation(() => {
      return Promise.resolve(null);
    });

    //act
    const actualResult = await postProvider.getAllPosts();

    //assertion
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return empty array when status isn't 200 OK", async () => {
    //arrange
    const postProvider = new PostProvider();
    const expectedResult = [];

    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: 404,
        data: {},
      });
    });

    //act
    const actualResult = await postProvider.getAllPosts();

    //assertion
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return error when getAllPosts function throw error", async () => {
    //arrange
    const postProvider = new PostProvider();
    const expectedResult = "Error on get posts!";

    axios.get.mockImplementation(() => {
      return Promise.reject(expectedResult);
    });

    //act
    const actualResult = async () => await postProvider.getAllPosts();

    //assertion
    expect(actualResult).rejects.toThrow(expectedResult);
  });
});
