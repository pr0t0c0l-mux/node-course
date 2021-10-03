const chalk = require('chalk')
const { demandOption, demand } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title: {
            describe: 'Add Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
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
            demadnOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create a list 
yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler(){
        notes.listNotes()
    }
})

//Create a read
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
