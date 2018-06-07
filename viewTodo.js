class View_todo{
    static showMenu(listMenu){
        for(var i = 0; i < listMenu.length; i++){
            for(var key in listMenu[i]){
                console.log(`$ node todo.js ${listMenu[i][key]}`);
            }
        }
    }

    static showListTugas(list_tugas){
        console.log(list_tugas);
    }

    static showId(id){
        console.log(id)
    }

    static showUpdateList(updateList){
        console.log(updateList);
    }
}

module.exports = View_todo

// console.log(View_todo.showId(1));
