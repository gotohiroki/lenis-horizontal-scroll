export default class ToggleMenu {
  constructor(nav, toggle, link) {
    this.DOM = {};
    this.DOM.nav = document.querySelector(nav);
    this.DOM.toggle = document.querySelector(toggle);
    this.DOM.items = document.querySelectorAll(link);
    this.DOM.body = document.body;
    this.DOM.y = 0;

    this.eventType = this._getEventType();
    this.play();

  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click'
  }

  _menuOpen() {
    this.DOM.y = window.scrollY;
    this.DOM.toggle.setAttribute('aria-expanded', 'true');
    this.DOM.toggle.setAttribute('aria-label', 'CLOSE');
    this.DOM.nav.setAttribute('aria-hidden', 'false');
  }

  _menuClose() {
    this.DOM.toggle.setAttribute('aria-expanded', 'false');
    this.DOM.toggle.setAttribute('aria-label', 'MENU');
    this.DOM.nav.setAttribute('aria-hidden', 'true');
  }

  play() {
    this.DOM.toggle.addEventListener(this.eventType, () => {
      if(this.DOM.toggle.getAttribute('aria-expanded') === 'true') {
        this._menuClose()
        
      } else {
        this._menuOpen()
      }
    });
  }
}