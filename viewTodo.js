class View_todo{
    static showList(listMenu){
        for(var i = 0; i < listMenu.length; i++){
            for(var key in listMenu[i]){
                console.log(`$ node todo.js ${listMenu[i][key]}`);
            }
        }
    }
}

module.exports = View_todo