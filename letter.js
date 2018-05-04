module.exports.L = class Letter {
  constructor(a) {
    this.letter = a;
    this.guessed = false;
  }

  check(b) {
    this.guessed = this.letter === b
  }
}