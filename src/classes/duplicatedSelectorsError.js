class DuplicatedSelectorsError extends Error {
  constructor() {
    super(
      'Element, id and pseudo-element should not occur more then one time inside the selector',
    );
  }
}

module.exports = DuplicatedSelectorsError;
