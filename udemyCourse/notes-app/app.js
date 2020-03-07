//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'This file was created by Node.js!. It was a new line wrote by CrisNar')

//const validator = require('validator')
//console.log(validator.isEmail('orangecn23@gmail.com'));
//console.log(validator.isURL('https://nodejs.org/dist/latest-v12.x/docs/api/fs.html'));

const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Removing note!');
}


// const notesPrint = getNotes()
// console.log(notesPrint);

// console.log(chalk.red('"Success!"'));

// const add = require('./utils')
// const sum = add(4,-2)
// console.log(sum);
