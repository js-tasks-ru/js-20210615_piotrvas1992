export default class NotificationMessage {
  static instanceComponent;
  element;
  timer;

  constructor(message = '', {duration = 2000, type = 'success'} = {}) {
    this.message = message;
    this.duration = duration;
    this.seconds = duration / 1000;
    this.type = type;

    this.render();
  }

  get template() {
    return `
      <div class="notification ${this.type}" style="--value:${this.seconds}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show(wrapper = document.body) {
    if (NotificationMessage.instanceComponent) {
      NotificationMessage.instanceComponent.remove();
    }

    wrapper.append(this.element);
    this.timer = setTimeout(()=>{ this.remove(); }, this.duration);

    NotificationMessage.instanceComponent = this;
  }

  remove() {
    clearTimeout(this.timer);
    this.element.remove();
  }

  destroy() {
    this.remove();
    NotificationMessage.instanceComponent = null;
  }


}
