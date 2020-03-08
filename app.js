const chalk = require("chalk")
const yargs = require("yargs")

const {getNotes, addNote} = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

// console.log(process.argv)
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'number'
        },
        body:{
            describe:'Note body',
            type:'string',
            demandOption:true
        },
        description:{
            describe:'Add description',
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        addNote(argv.title, argv.body, argv.description)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('removing...')
    }
})

//read command 
yargs.command({
    command:'list',
    describe:'list a note',
    handler:function(){
        console.log("listing a command...")
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('reading a note...')
    }
})

//add, remove , read , list
yargs.parse()
