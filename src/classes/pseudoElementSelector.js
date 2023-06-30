class PseudoElementSelector {
  constructor(value) {
    this.value = value;
  }

  stringify() {
    return `::${this.value}`;
  }
}

module.exports = PseudoElementSelector;
