import { assets } from "../../assets/assets.js";
import sheetText from "./BlogItem.css?inline";

export class BlogItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(sheetText);
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
  connectedCallback() {
    const $blogItem = document.createElement("div");
    $blogItem.className = "blog-container";

    const slot = document.createElement("slot");
    $blogItem.append(slot);

    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const category = this.getAttribute("category") || "";
    const author = this.getAttribute("author") || "";
    const author_img = this.getAttribute("author_img") || "";
    const date = this.getAttribute("date") || "";
    const description = this.getAttribute("description") || "";
    const formattedDate = date ? new Date(date).toLocaleDateString() : "";

    slot.setHTMLUnsafe(/*html*/ `
        <img src="${image}" alt="${title}" width="400" height="auto" class="blog-container__image loading="lazy" />
        <p class="blog-container__category">${category}</p>
        <small class="blog-container__author"><img src="${author_img}" alt="profile icon" class="blog-container__author__img" width="32" height="32" /> ${author}</small>
        <small class="blog-container__date"><span>Fecha: </span> ${formattedDate}</small>
        <div class="blog-content">
          <h5 class="blog-content__title">${title}</h5>
          <p class="blog-content__description">${description}</p>
          <button class="blog-content__button">Read More <img src="${assets.arrow}" alt="arrow icon" width="12" class="blog-content__button__arrow" /></button>
        </div>
      `);
    
    const moreBtn = slot.querySelector(".blog-content__button")
    moreBtn.addEventListener("click", () => {
      const urlTitle = encodeURIComponent(title)

      window.location.href = `/pages/post-page/?title=${urlTitle}`;
    });
    
    this.shadowRoot.append($blogItem);
  }
}

customElements.define("blog-item", BlogItem);
