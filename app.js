const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

// Cread add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //필수 옵션 여부 정하기
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ', argv.title)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function () {
        console.log('Listing the note')
    }
})

yargs.command({
    command: 'Read',
    describe: 'Read your notes',
    handler: function () {
        console.log('Read the note')
    }
})


//add remove read list
yargs.parse()
