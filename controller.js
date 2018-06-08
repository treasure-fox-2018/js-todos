let Model = require('./model')
let View = require('./view')



class Controller {

    
    static getHelp_c() {
        View.help_v()
    }

    static getTodoList_c() {
        let result = Model.toDoList_m()
        View.list_v(result)
    }

    static addTodoList_c(variable) {
        Model.setTodoList_m(variable)

    }

    static findTask_c(variable) {
        let result = Model.getTask_m(variable)
        View.showFindTask_v(result)
    }

    static deleteTask_c(variable) {
        Model.deletedTask_m(variable)

    }

    static completedTask_c(variable) {

        Model.completedTask_m(variable)
    }

    static incompletedTask_c(variable) {

        Model.incompletedTask_m(variable)
    }

    static sortTask_c(command) {
        let sorted = Model.SortcreatedDate_m(command)
        View.SortedDate_v(sort)

    }

    static sortCompletedTask_c(command) {
        let sorted = Model.SortcompleteDate_m(command)
        View.SortedDate_v(sort)

    }

    static putTag_c(id, tags) {


        Model.Tag_m(id, tags)
    }

    static filter_c(variable) {
        let taggedList = Model.showFilter_m(variable)
        View.ShowFilteredData_v(taggedList)

    }


}

module.exports = Controller
