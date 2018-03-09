import { startedData } from "./started-data";

class Api {
  constructor() {
    this.posts = this._loadPosts() || startedData;
  }

  /**
   * @private
   */
  _savePosts() {
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }

  /**
   * @private
   * @returns {Object} Data from local storage or started data
   */
  _loadPosts() {
    return JSON.parse(localStorage.getItem("posts")) || startedData;
  }

  /**
   * @param {number} id Post id
   * @returns {Array} Array with posts
   */
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

  /**
   * @returns {Array} Array with posts
   */
  getPosts() {
    return this.posts;
  }
}

export let api = new Api();
