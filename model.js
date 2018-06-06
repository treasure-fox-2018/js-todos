var fs = require('fs');

class Model {


    constructor(id, task) {

        this._id = id
        this._task = task

    }
    list(id, task) {
        let newTodo = {

            id: id,
            task: task
        }



        todo.push(newTodo)
        return true    

    }
}