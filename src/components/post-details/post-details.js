import { blog_data } from "../../data/blogs.js";
import sheetText from "./post-details.css?inline";

export class PostDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(sheetText);
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
  connectedCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    let data = null;

    for (let i = 0; i < blog_data.length; i++) {
      if (Number(postId) === blog_data[i].id) {
        data = blog_data[i];
        break;
      }
    }

    const $post = document.createElement("section");
    $post.className = "post-details-container";
    const slot = document.createElement("slot");
    $post.append(slot);
    if (data) {
      slot.setHTMLUnsafe(/*html*/ `
        <h1>${data.title}</h1>
      `);
    }

    this.shadowRoot.append($post);
  }
}

customElements.define("post-details", PostDetails);
