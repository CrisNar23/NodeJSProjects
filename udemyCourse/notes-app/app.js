//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'This file was created by Node.js!. It was a new line wrote by CrisNar')

//const validator = require('validator')
//console.log(validator.isEmail('orangecn23@gmail.com'));
//console.log(validator.isURL('https://nodejs.org/dist/latest-v12.x/docs/api/fs.html'));

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  //If function is a method, use ES6 method definition syntax
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  //If function is a method, use ES6 method definition syntax
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  //If function is a method, use ES6 method definition syntax
  handler() {
    notes.listNotes()
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()




// const command = process.argv[2]
// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Removing note!');
// }


// const notesPrint = getNotes()
// console.log(notesPrint);

// console.log(chalk.red('"Success!"'));

// const add = require('./utils')
// const sum = add(4,-2)
// console.log(sum);
