'use strict'

const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');

const commandView = require('../views/view.js')
const model = require('../models/model.js')

class Controller {
    
    static list() {
        let toDoList = model.list();
        commandView.list(toDoList);
    }

    static helpMenu() {
        commandView.helpMenu()
    }

    static addMenu(detail) {
        let listMenu = model.addMenu(detail)
        commandView.addMenu(listMenu);
    }

    static findMenu(input) {
        let find = model.findMenu(input)
        commandView.findMenu(find)
    }

    static deleteMenu(input) {
        let deleted = model.deleteMenu(input);
        commandView.deleteMenu(deleted);
    }

    static complete(input) {
        let status = model.complete(input);
        commandView.complete(status);
    }

    static incomplete(input) {
        let status = model.incomplete(input);
        commandView.incomplete(status);
    }

}

module.exports = Controller;