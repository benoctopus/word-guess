const Game = require('./game').Game;
let bank = require('./data').Bank;

async function run() {
  let game = new Game(bank.pickWord());
  await game.init();
  run()
}

run();
