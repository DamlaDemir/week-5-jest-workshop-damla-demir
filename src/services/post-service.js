export default class PostService {
  constructor(postProvider) {
    this.postProvider = postProvider;
  }

  getTopPostingUser = async () => {
    try {
      let userPosts = await this.postProvider.getAllPosts(),
        userPostCounts = [];

      userPosts.forEach((userPost) => {
        let userPostItem = userPostCounts.filter(
          (x) => x.userId == userPost.userId
        )[0];

        if (userPostItem) {
          userPostItem.postCount += 1;
          userPostItem.title.push(userPost.title);
        } else {
          userPostCounts.push({
            userId: userPost.userId,
            postCount: 1,
            title: [userPost.title],
          });
        }
      });

      let maxCount = Math.max(...userPostCounts.map((o) => o.postCount));
      let topPostingUsers = userPostCounts.filter(
        (userPost) => userPost.postCount === maxCount
      );

      return this.mappedUserPosts(topPostingUsers);
    } catch (err) {
      throw new Error("Error on get top posting user!");
    }
  };

  mappedUserPosts = (userPosts) => {
    return userPosts.map((userPost) => userPost.title);
  };
}
