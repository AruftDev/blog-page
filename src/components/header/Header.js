import { assets } from "../../assets/assets.js"
import sheetText from "./Header.css?inline"

export class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(sheetText)
    this.shadowRoot.adoptedStyleSheets = [sheet]
  }

  connectedCallback() {
    const $header = document.createElement("header");
    $header.className = "header-container"
    const slot = document.createElement("slot")
    $header.append(slot)
    slot.setHTMLUnsafe(/*html*/`
      <div class="header-container__wrapper">
        <img class="header-container__logo" src="${assets.logo}" alt="blogger logo" width="180" height="180">
      <button class="header-container__btn">
        Get Started <img src="${assets.arrow}" class="header-container__btn__arrow" alt="arrow icon" />
      </button>
      </div>
    `)
    this.shadowRoot.append($header)
  }
}

customElements.define("blog-header", Header)