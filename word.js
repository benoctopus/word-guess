const L = require('./letter').L;

module.exports.Word = class Word {
  constructor(word) {
    this.word = this.arrayOfL(word);
    this.tried = [];
  }

  arrayOfL(word) {
    return word.split('').map(l => l !== ' ' ? new L(l) : null)
  }

  display() {
    let tried = (`Tried: ${this.tried.slice(0).join().replace(/,/g, ' ')}`);
    let hiddenW = (
      this.word.slice(0)
        .map(l => !!l ? (l.guessed ? l.letter : '_') : ' ')
        .join().replace(/,/g, ' ')
    );
    return tried + '\n' + hiddenW + '\n'
  }

  check(letter) {
    this.tried.push(letter);
    let ch = this.word.slice().map(l => !!l ? l.check(letter) : null);
    return (ch.indexOf(true) >= 0)
  }

  win() {
    let cond = i => !!this.word[i] ? this.word[i].guessed : true;
    for (let i in this.word) {
      if (!cond(i)) {
        return false;
      }
    }
    return true
  }
};
