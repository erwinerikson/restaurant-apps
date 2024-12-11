const CommentInitiator = {
  init({ url, comment }) {
    this._commentDisplay(url, comment);
  },

  _commentDisplay(url, comment) {
    comment.style.display = url == "/detail/:id" ? "block" : "none";
  },
};

export default CommentInitiator;
