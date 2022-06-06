const tasksService = require("../services/tasks-service");

exports.index = async function(req, res, next) {

    try{
        let tasks = await tasksService.getAll();

        res.render('tasks', {
            title: 'Your To Do List',
            currentPage: 'home',
            tasks: tasks
        });

    }
    catch (e){
        console.log(e);
    }

}