const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(title, body, description){
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if(duplicateNotes.length === 0){
        notes.push({
            title,
            body,
            description
        })
        saveNotes(notes)
        console.log('new note added')
    }else{
        console.log('Note title taken...')
    }


    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const loadNotes = function(){
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch (error) {
       return [] 
    }
    
}


module.exports = {
    getNotes,
    addNote
}