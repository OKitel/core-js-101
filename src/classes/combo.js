class Combo {
  constructor(selector1, combinator, selector2) {
    this.selector1 = selector1;
    this.selector2 = selector2;
    this.combinator = combinator;
  }

  stringify() {
    return `${this.selector1.stringify()} ${
      this.combinator
    } ${this.selector2.stringify()}`;
  }
}

module.exports = Combo;
