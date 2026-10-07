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
    const slot = document.createElement("slot");
    $post.append(slot);
    if (data) {
      slot.setHTMLUnsafe(/*html*/ `
        <div class="post-details-container">
          <div class="post-details__content">
            <h1 class="post-details__title">${data.title}</h1>
            <img src="${data.author_img}" alt="${data.author}" width="80" height="80" />
            <p class="post-details__author">${data.author}</p>
          </div>          
        </div>
        <div class="post-details__content-post">
          <img src="${data.image}" alt="${data.title}" width="1280" height="auto" />
          <h1>Introduction:</h1>
          <p class="post-details__description">${data.description}</p>
          <h3>Step 1: Self-Reflection and Goal Setting</h3>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <h3>Step 2: Self-Reflection and Goal Setting</h3>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <h3>Step 3: Self-Reflection and Goal Setting</h3>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <p class="p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus saepe temporibus voluptates enim numquam dolor, nemo nam tenetur atque eius ipsum vero culpa alias ullam unde! Libero cum eveniet accusamus aspernatur officia debitis saepe maiores.
          </p>
          <h3>Conclusion</h3>
          <p class="p-2" style="margin-bottom: 9.6rem;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque vero aspernatur nobis molestiae repudiandae necessitatibus odit, explicabo commodi in expedita esse deleniti quisquam odio cumque nostrum obcaecati architecto, minima asperiores eligendi. Itaque dolorum sunt blanditiis architecto, accusamus aspernatur repudiandae, mollitia dignissimos assumenda excepturi deleniti!
          </p>
        </div>
      `);
    }

    this.shadowRoot.append($post);
  }
}

customElements.define("post-details", PostDetails);
