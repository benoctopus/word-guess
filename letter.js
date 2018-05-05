module.exports.L = class Letter {
  constructor(a) {
    this.letter = a;
    this.guessed = false;
  }

  check(b) {
    if (!this.guessed) {
      return this.guessed = this.letter === b
    }
    else {return false}
  }
};
