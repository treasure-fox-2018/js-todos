"use strict"
const fs = require('fs')
const Controller = require('./todoController.js')

var dataString = fs.readFileSync('./data.json','UTF8')
var dataArr = JSON.parse(dataString)

class Model{
    // constructor(){
    //     this._file = []
    // }


    static createData(){
        var list = []
        for(let i=0; i<dataArr.length; i++){
            list.push(`${dataArr[i].id}. ${dataArr[i].task}`)
        }
        var listJoin = list.join('\n')
        return listJoin
    }


    

    static add(newTask){
        var dataObj = {id:'',status:[],task:'',date:new Date()}
        if(dataArr.length === 0){
            dataObj.id = 1
        }else{
            dataObj.id = dataArr[dataArr.length-1].id+1
        }
        dataObj.task = newTask
        dataObj.tag = []
        dataArr.push(dataObj)
        var dataConvert = JSON.stringify(dataArr,null,1)
        var newFile = JSON.stringify(fs.writeFileSync('./data.json',dataConvert))
    }

    static readData(){
        return dataArr
    }

    static deleteData(idContent){
        var indexArrToDelete = 0
        var taskToDelete = ''
        for(let i = 0; i<dataArr.length; i++){
            if(dataArr[i].id === idContent){
                indexArrToDelete = i
                taskToDelete = dataArr[i].task
            }
        }
        dataArr.splice(indexArrToDelete,1)
        var dataConvert = JSON.stringify(dataArr,null,1)
        var newFile = fs.writeFileSync('./data.json',dataConvert)
        return taskToDelete
    }

    static statusComplete(id,status){
        for(let i = 0; i<dataArr.length;i++){
            if(dataArr[i].id === id){
                if(status === 'complete'){
                    dataArr[i].status.push('X')
                }else if(status === 'uncomplete'){
                    dataArr[i].status.push(' ')
                }
            }
        }
        var dataConvert = JSON.stringify(dataArr,null,1)
        var newFile = fs.writeFileSync('./data.json',dataConvert)
    }
}


// console.log(Model.createData())
// console(Model.)
module.exports = Model