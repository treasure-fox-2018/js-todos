"use strict"
const View = require("./todoView.js")
const Model = require("./todoModel.js")

class Controller{

    static List(){
        var dataList = Model.createData()
        View.viewList(dataList)
    }
    static Help(){
       View.viewHelp()
    }

    static Add(newTask){
        var addTask = Model.add(newTask)
        View.viewAdd(newTask)
    }

    static FindById(idContent){
        var dataList = Model.readData()
        for(let i = 0; i<dataList.length; i++){
            if(dataList[i].id === Number(idContent)){
                View.viewId(dataList[i].id,dataList[i].task)
            }
        }
    }

    static delete(idContent,deleteTask){
        var deleteTask=Model.deleteData(idContent)
        View.viewDelete(deleteTask)
    }

    static statusComplete(id){
        var statusTask = Model.statusComplete(id,'complete')
        var dataList = Model.readData()
        var list = []
        for(let i = 0; i<dataList.length; i++){
            list.push(`${dataList[i].id}. ${dataList[i].status} ${dataList[i].task}`)
        }
    }

}

// console.log(Controller.FindById())

module.exports = Controller