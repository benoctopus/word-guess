const L = require('./letter').L;

class Word {
  constructor(word) {
    this.word = this.arrayOfL(word);
  }

  arrayOfL(word) {
    return word.split('').map(l => l !== ' ' ? new L(l) : null)
  }

  display() {
    console.log(
      this.word.slice(0)
        .map(l => !!l ? (l.guessed ? l.letter : '_') : ' ')
        .join().replace(/,/g, ' ')
    )
  }
}


let wr = new Word('hello my friend');

wr.display();