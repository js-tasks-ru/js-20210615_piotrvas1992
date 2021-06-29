export default class ColumnChart {
  element;
  chartHeight = 50;

  constructor({data = [], label = '', link = '', value = 0, formatHeading = null } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.formatHeading = formatHeading;

    this.createElement();
  }

  getFormatHeading() {
    if (!this.formatHeading) {return this.value;}

    return this.formatHeading(this.value);
  }

  createElement() {
    const content =
      `
      <div class="column-chart" style="--chart-height: 50">
        <div class="column-chart__title">
          Total ${this.label}
          <a href="" class="column-chart__link">View All</a>
        </div>
        <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">${this.getFormatHeading()}</div>
            <div data-element="body" class="column-chart__chart"></div>
        </div>
    </div>
      `;

    this.element = document.createElement('div');
    this.element.innerHTML = content;

    if (this.link) {
      this.element.querySelector('.column-chart__link').setAttribute('href', this.link);
    }
    else {
      this.element.querySelector('.column-chart__link').remove();
    }

    this.update(this.data);
  }

  createColumn(value) {

    return `
      <div style="--value: ${this.getValue(value)}" data-tooltip="${this.getPersentageValue(value)}"></div>
    `;
  }

  getValue(value) {
    const maxValue = Math.max(...this.data);
    const scale = 50 / maxValue;

    return String(Math.floor(value * scale));
  }

  getPersentageValue(value) {
    const maxValue = Math.max(...this.data);

    return ((value / maxValue) * 100).toFixed(0) + '%';
  }

  update(data) {
    this.data = data;
    if (!data.length) {
      this.replaceSkeleton();
      return;
    }

    const columnChart = this.element.querySelector('.column-chart__chart');
    columnChart.innerHTML = data.map(item => this.createColumn(item)).join('');
  }

  replaceSkeleton() {
    this.element.classList.add('column-chart_loading');
  }

  destroy() {}

  remove() {
    this.element.remove();
  }
}
