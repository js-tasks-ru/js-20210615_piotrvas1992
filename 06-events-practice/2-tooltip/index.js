
class Tooltip {
  text = '';
  element;
  static #instance = null;

  constructor() {
    if (!Tooltip.#instance) {
      Tooltip.#instance = this;
    }

    return Tooltip.#instance;
  }

  get template() {
    return `
      <div class="tooltip">${this.text}</div>
    `;
  }

  render() {
    Tooltip.#instance.element = document.createElement('div');
    Tooltip.#instance.element.innerHTML = Tooltip.#instance.template;
    Tooltip.#instance.element.style.position = 'absolute';
    document.body.append(Tooltip.#instance.element);
  }

  initialize() {
    document.addEventListener('pointerover', this.pointerOverCallback);
    document.addEventListener('pointerout', this.pointerOut);
    document.addEventListener('pointermove', this.pointerMove);
  }

  pointerOverCallback(event) {
    if (Tooltip.#instance.element) {
      Tooltip.#instance.element.remove();
    }

    if (event.target.dataset.tooltip === 'foo') {
      Tooltip.#instance.text = 'foo';
      Tooltip.#instance.render();
    }
    else if (event.target.dataset.tooltip === 'bar-bar-bar') {
      Tooltip.#instance.text = 'bar-bar-bar';
      Tooltip.#instance.render();
    }
  }

  pointerOut() {
    if (Tooltip.#instance.element) {
      Tooltip.#instance.element.remove();
    }
  }

  pointerMove(event) {
    if (event.target.dataset.tooltip === 'foo' || event.target.dataset.tooltip === 'bar-bar-bar') {
      Tooltip.#instance.element.style.left = event.clientX + 15 + 'px';
      Tooltip.#instance.element.style.top = event.clientY + 15 + 'px';
    }
  }

  destroy() {
    Tooltip.#instance.element.remove();
    document.removeEventListener('pointerover', this.pointerOverCallback);
    document.removeEventListener('pointerout', this.pointerOut);
    document.addEventListener('pointermove', this.pointerMove);
  }

}

export default Tooltip;
