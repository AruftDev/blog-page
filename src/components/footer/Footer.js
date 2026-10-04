import { assets } from "../../assets/assets.js"
import sheetText from './Footer.css?inline';

export class Footer extends HTMLElement {
    constructor() {
        super();
      this.attachShadow({ mode: "open" })
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(sheetText);
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }
    connectedCallback() {
      const $footer = document.createElement('footer')
      $footer.className = "footer"
      const slot = document.createElement('slot')
      $footer.append(slot)
      slot.setHTMLUnsafe(/*html*/`
        <img src="${assets.logo_light}" alt="logo" width="120">
        <p class="footer__copy">All rights reserved, &copy; @blogger</p>
        <div class="footer__social">
          <a href="#"><img src="${assets.facebook_icon}" alt="facebook" width="40"></a>
          <a href="#"><img src="${assets.twitter_icon}" alt="twitter" width="40"></a>
          <a href="#"><img src="${assets.googleplus_icon}" alt="googleplus" width="40"></a>
        </div>
      `)
      this.shadowRoot.append($footer)
    }
}

customElements.define('blog-footer', Footer)
