const toDo = require('./data.json');

class Model {
    constructor(id,task){
        this._id = id
        this._task = task
    }
    createTodo(id,task){
        let newTodo = {
            id: id,
            task: task
        };

        todo.push(newTodo)
        return true
    }

    static get toDo() {
        return toDo;
    }

    parse(){

    }

}