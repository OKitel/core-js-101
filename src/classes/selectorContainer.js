const ElementSelector = require('./elementSelector');
const IdSelector = require('./idSelector');
const ClassSelector = require('./classSelector');
const AttrSelector = require('./attrSelector');
const PseudoClassSelector = require('./pseudoClassSelector');
const PseudoElementSelector = require('./pseudoElementSelector');

class SelectorContainer {
  constructor() {
    this.selectors = [];
  }

  element(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (prevElem instanceof ElementSelector) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    if (this.selectors.length !== 0) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.selectors.push(new ElementSelector(value));
    return this;
  }

  id(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (prevElem instanceof IdSelector) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    if (!(prevElem instanceof ElementSelector) && prevElem) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.selectors.push(new IdSelector(value));
    return this;
  }

  class(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (
      prevElem instanceof AttrSelector
      || prevElem instanceof PseudoClassSelector
      || prevElem instanceof PseudoElementSelector
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.selectors.push(new ClassSelector(value));
    return this;
  }

  attr(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (
      prevElem instanceof PseudoClassSelector
      || prevElem instanceof PseudoElementSelector
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.selectors.push(new AttrSelector(value));
    return this;
  }

  pseudoClass(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (prevElem instanceof PseudoElementSelector) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.selectors.push(new PseudoClassSelector(value));
    return this;
  }

  pseudoElement(value) {
    const prevElem = this.selectors[this.selectors.length - 1];
    if (prevElem instanceof PseudoElementSelector) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
    this.selectors.push(new PseudoElementSelector(value));
    return this;
  }

  stringify() {
    const result = this.selectors
      .map((selector) => selector.stringify())
      .join('');
    return result;
  }
}

module.exports = SelectorContainer;
