const inq = require('inquirer');
const colors = require('colors');
const Word = require('./word').Word;

run();

function run() {

  const w = new Word('hey guys');
  let chances = 10;
  main();

  function main() {
    console.log(w.display());
    inq.prompt([
        {
          type: 'input',
          message: 'guess a letter',
          name: 'guess'
        }
      ]
    ).then(res => {
      console.log(
        '\n\n'
        + w.check(res.guess) ?
          `success \nchances remaining: ${chances}`
          : `incorrect \nchances remaining: ${chances--}\n\n`
          );
      main()
    });

  }


}
