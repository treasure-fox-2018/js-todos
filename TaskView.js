'use strict'

class TaskView {
    static printAllTask(tasks) {
        console.log('      Welcome to Todo App \n');
        console.log('          Task List :\n');
        console.log(`     [ s ] [ id ]     task\n`)
        for (let i = 0; i < tasks.length; i++) {
            let arrObjTasks = tasks[i]
            let isCompleted = arrObjTasks.status === 1
            if (isCompleted) {
                console.log(`     [ x ] [ ${arrObjTasks.id} ]   ${arrObjTasks.task}`)
            } else {
                console.log(`     [   ] [ ${arrObjTasks.id} ]   ${arrObjTasks.task}`);
            }
        }

        console.log('\n      Legend')
        console.log('[   ] uncomplete task')
        console.log('[ x ] completed task')
    }

    static viewFoundTask(task) {
        console.log(`Found task : ${task.task}`);
    }

    static viewShowHelp() {
        console.log('     Welcome to Todo App \n');
        console.log('Command List :\n1. help\n2. list\n3. add <task_content>\n4. find <id_task>\n5. delete <task_id>\n6. complete <task_id>\n7. uncomplete <task_id>');
    }

    static printTask(task) {
        console.log(`Found Task : ${task.task} - Tag : ${task.tag}`)
    }
}

module.exports = TaskView
