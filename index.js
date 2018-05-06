const inq = require('inquirer');
const colors = require('colors');
const Word = require('./word').Word;
const Game = require('./game').Game;
let bank;

async function run() {
  if (!bank || bank.length < 1) {
    bank = resetBank();
  }
  let game = new Game(bank[0]);
  await game.init();
  run()
}



function resetBank() {
  return require('./data').bank.slice(0)
}

run();
