import sheetText from "./Newsletter.css?inline"

export class Newsletter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(sheetText)
        this.shadowRoot.adoptedStyleSheets = [sheet]
    }
    connectedCallback() {
      const $news = document.createElement("section")
      $news.className = "newsletter-container"
      const slot = document.createElement("slot")
      $news.append(slot)
      slot.setHTMLUnsafe(/*html*/`
          <h1 class="newsletter-container__title">Latest Blogs</h1>
          <p class="newsletter-container__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore molestias aliquam, tempora vero ipsa modi doloribus temporibus deserunt delectus ex quaerat obcaecati cumque.
          </p>
          <form class="newsletter-container__form">
            <input type="email" placeholder="Enter your email" class="newsletter-container__form__input" />
            <button type="submit" class="newsletter-container__form__btn">Subscribe</button>
          </form>
        `)
      this.shadowRoot.append($news)
    }
}

customElements.define("blog-newsletter", Newsletter);