import { blog_data } from "../../data/blogs.js"
import { assets } from "../../assets/assets.js"
import sheetText from "./BlogItem.css?inline"

export class BlogItem extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(sheetText)
        this.shadowRoot.adoptedStyleSheets = [sheet]
    }
    connectedCallback() {
      const $blogItem = document.createElement("div")
      $blogItem.className = "blog-container"
      const slot = document.createElement("slot")
      $blogItem.append(slot)
      slot.setHTMLUnsafe(/*html*/`
        <img src="${blog_data[0].image}" alt="${blog_data[0].title}" width="400" height="auto" class="blog-container__image" />
        <p class="blog-container__category">${blog_data[0].category}</p>
        <small class="blog-container__author">${blog_data[0].author}</small>
        <small class="blog-container__date"><span>Fecha: </span> ${new Date(blog_data[0].date).toLocaleDateString()}</small>
        <div class="blog-content">
          <h5 class="blog-content__title">${blog_data[0].title}</h5>
          <p class="blog-content__description">${blog_data[0].description}</p>
          <button class="blog-content__button">Read More <img src="${assets.arrow}" alt="arrow icon" /></button>
        </div>
      `)
      this.shadowRoot.append($blogItem)
    }
}

customElements.define("blog-item", BlogItem)