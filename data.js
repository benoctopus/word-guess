class Bank {
  constructor() {
    this.words =
      [
        'the office',
        'the sting',
        'good luck',
        'abraham lincoln',
        'high noon',
        'liberty bell'
      ];
    this.current = [];
  }

  pickWord() {
    if (typeof this.current === 'undefined' || this.current.length < 1) {
      this.current = this.words.slice(0)
    }
    return this.current.splice(this.random(), 1).join();
  }

  random() {
    return Math.floor(Math.random() * this.current.length)
  }
}

module.exports.Bank = new Bank();




