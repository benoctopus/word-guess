const W = require('./word').Word;
const prompt = require('inquirer').prompt;
const colors = require('colors');

module.exports.Game = class Game {
  constructor(word) {
    this.word = new W(word);
    this.chances = 10;
  }

  init() {
    return new Promise(resolve => (this.loop(resolve)))
  }

  async loop(resolve) {
    console.log(await this.ask() ? 'correct'.green : 'incorrect'.red);
    if (this.word.win() || this.chances < 1) {
      console.log(this.chances < 1 ? 'you loose'.red : 'you win'.green);
      prompt([
        {
          type: 'confirm',
          message: 'play again?',
          name: 'again'
        }
      ]).then(res => (res.again ? resolve : process.exit)());
    }
    else {
      this.loop(resolve)
    }
  }

  ask() {
    console.log(`chances left: ${this.chances}`.yellow);
    console.log(this.word.display());
    return new Promise(resolve => {
      prompt([
        {
          type: 'input',
          message: 'guess a letter',
          name: 'guess'
        }
      ]).then(res => {
        let correct = this.word.check(res.guess);
        if (!correct) this.chances--;
        resolve(correct)
      });
    })
  }
}