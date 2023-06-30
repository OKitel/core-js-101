class InvalidSelectorsSequenceError extends Error {
  constructor() {
    super(
      'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
    );
  }
}

module.exports = InvalidSelectorsSequenceError;
