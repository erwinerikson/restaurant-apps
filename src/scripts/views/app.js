import MenuInitiator from "../utils/menu-initiator";
import CommentInitiator from "../utils/comment-initiator";
import CommentForm from "../utils/comment-form";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import "../../components/index";

class App {
  constructor({ menu, hero, main, drawer, content, comment, form, loading }) {
    this._menu = menu;
    this._hero = hero;
    this._main = main;
    this._drawer = drawer;
    this._content = content;
    this._comment = comment;
    this._form = form;
    this._loading = loading;

    this._loading.append(document.createElement("indicator-loading"));

    this._initialAppShell();
    this._initialCommentForm();
  }

  _initialAppShell() {
    MenuInitiator.init({
      menu: this._menu,
      hero: this._hero,
      main: this._main,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    this._showLoading(true);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._initialCommentDisplay(url);
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._showLoading(false);
  }

  _initialCommentDisplay(url) {
    CommentInitiator.init({
      url: url,
      comment: this._comment,
    });
  }

  _initialCommentForm() {
    CommentForm.init({
      form: this._form,
      loading: this._loading,
    });
  }

  _showLoading(show) {
    this._loading.style.display = show ? "flex" : "none";
  }
}

export default App;
