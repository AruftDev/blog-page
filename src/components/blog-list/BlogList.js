import { blog_data } from "../../data/blogs.js";
import sheetText from "./BlogList.css?inline";

export class BlogList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(sheetText);
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
  connectedCallback() {
    const $blogList = document.createElement("section");

    const slot = document.createElement("slot");
    $blogList.append(slot);

    slot.setHTMLUnsafe(/*html*/ `
        <div class="blog-list-container__filter">
          <button class="blog-list-container__filter__btn active">All</button>
          <button class="blog-list-container__filter__btn">Startup</button>
          <button class="blog-list-container__filter__btn">Technology</button>
          <button class="blog-list-container__filter__btn">Lifestyle</button>
        </div>
        <div class="blog-list-container__posts">
        ${blog_data
          .map(
            (post) => `
            <blog-item
              title="${post.title}"
              image="${post.image}"
              category="${post.category}"
              author="${post.author}"
              author_img="${post.author_img}"
              date="${post.date}"
              description="${post.description}"></blog-item>
          `,
          )
          .join("")}
        </div>
      `);

    const $filterBtns = slot.querySelector(".blog-list-container__filter");
    const $filterPosts = slot.querySelector(".blog-list-container__posts");

    $filterBtns.addEventListener("click", (e) => {
      const clicked = e.target.closest(".blog-list-container__filter__btn");
      if (clicked) {
        const category = clicked.textContent.trim();

        $filterBtns.querySelector(".active")?.classList.remove("active");
        clicked.classList.add("active");

        const posts = $filterPosts.querySelectorAll("blog-item");

        posts.forEach((post) => {
          const categoryPost = post.getAttribute("category");
          if (categoryPost === category || category === "All") {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }
        });
      }
    });

    this.shadowRoot.append($blogList);
  }
}

customElements.define("blog-list", BlogList);
