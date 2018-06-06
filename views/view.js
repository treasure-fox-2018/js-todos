'use strict'
// const fs = require('fs');
// const data = fs.readFileSync('./data.json', 'utf-8');
// const dataParse = JSON.parse(data);

class Command {
    
    // static getAll() {
    //     console.log(`this is the data`)
    // }

    static helpMenu() {
        console.log('COMMAND YANG TERSEDIA : ');
        console.log('help');
        console.log('add <task_content>');
        console.log('findById <task_id>');
        console.log('delete <task_id>');
        console.log('complete <task_id>');
        console.log('incomplete <task_id>');
    }

    static list(toDoList) {
        console.log(toDoList.join('\n'))
        // console.log(`Done listing data`)
    }

    static addMenu(listMenu) {
        console.log(`Added "${listMenu}" to your To Do list`)
        // console.log('Add data done! Data has been printed');
    }

    static findMenu(find) {
        console.log(find)
        // console.log(`Finding menu done`)
    }

    static deleteMenu(deleted) {
        console.log(`Deleted "${deleted}" from your To Do List`)
        console.log('Delete data success !')
    }

    static complete(status) {
        console.log(status.join('\n'));
    }

    static incomplete(status) {
        console.log(status.join('\n'));
    }
}

module.exports = Command;