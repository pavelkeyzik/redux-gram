import { startedData } from "./started-data";

class Api {
  constructor() {
    this.posts = this._loadPosts() || startedData;
  }

  _savePosts() {
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  _loadPosts() {
    return JSON.parse(localStorage.getItem("posts")) || startedData;
  }

  addLike(id) {
    let posts = this.posts.slice();
    let indexInPostsArray = null;
    this.posts.find((item, index) => {
      indexInPostsArray = index;
      if (item.id === id) return id;
      return null;
    });
    posts[indexInPostsArray].likes++;
    this.posts = posts;
    this._savePosts();
    return this.posts;
  }

  getPosts() {
    return this.posts;
  }
}

export let api = new Api();
