import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";
import "../styles/home.scss";
import "../styles/home-responsive.scss";
import App from "./views/app.js";
import swRegister from "./utils/sw-register.js";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  menu: document.querySelector("#menu"),
  hero: document.querySelector(".hero"),
  main: document.querySelector("main"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#maincontent"),
  comment: document.querySelector("#commentcontent"),
  form: document.querySelector("#form-input"),
  loading: document.querySelector("#loading"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
