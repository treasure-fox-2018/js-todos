const View = require ('../views/view.js')
const Model = require ('../models/model.js')

class Controller {
    static help() {
        View.help()
    }

    static list() {
        let data = Model.list()

        View.show(data)
    }


    static listCreated(parameter) {
        let listCreatedData = Model.listCreated(parameter)
        View.show(listCreatedData)

    }

    static listOutstanding(parameter) {
        let listOutstandingData = Model.listOutstanding(parameter) 
        View.show(listOutstandingData)
    }

    static listCompleted() {
        let listCompletedData = Model.listCompleted()
        View.show(listCompletedData)
    }
    
    static add(parameter) { // task === parameter
        //console.log(parameter)
        const proccessData =  Model.addData(parameter)
        View.show(proccessData)
    }

    static read() { // contoh pake callback
        Model.readData(function(err, data) {
            View.show(data)
        })
    }

    static findById(parameter) {
        let findbyid = Model.findbyid(parameter)
        View.show(findbyid)
    }
    
    static delete(parameter) {
        let deleteData = Model.delete(parameter)
        View.show(deleteData)
    }

    static complete(parameter) {
        let completeData = Model.complete(parameter)
        View.show(completeData)
    }

    static uncomplete(parameter) {
        let uncompleteData = Model.uncomplete(parameter)
        View.show(uncompleteData)
    }

    static tag(parameter) {
        let tagData = Model.tag(parameter) 
        View.show(tagData)
    }

    static filter(parameter) {
        let filterData = Model.filter(parameter)
        View.show(filterData)
    }

}

module.exports = Controller

// nama file yg di export dan yg diterima harus sama