'use strict'
const fs = require('fs');
const view = require('./views/view.js');
const controller = require('./controllers/controller.js');
const input = process.argv[2];
const detail = process.argv[3];

if(input == 'help') {
    return controller.helpMenu();
} else if(input == 'list') {
    controller.list();
} else if(input == 'add') {
    controller.addMenu(detail);
} else if(input == 'find') {
    controller.findMenu(detail);
} else if(input == 'delete') {
    controller.deleteMenu(detail);
} else if(input == 'complete') {
    controller.complete(detail);
} else if(input == 'incomplete') {
    controller.incomplete(detail);
}