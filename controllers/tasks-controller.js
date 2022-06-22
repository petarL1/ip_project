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

exports.new = async function (req, res, next) {

    let formData = {};

    res.render('add-task', {
        title: 'Add Task',
        currentPage: 'home',
        formData: formData,
    })
}

exports.store = async function (req, res, next) {

    let formData = validateAndCreateTaskFormData(req.body);

    if(formData.valid){

        let input = {
            title: formData.title.value,
            description: formData.description.value
        };

        let task = await tasksService.storeNew(input);

        console.log(task);

        res.redirect('/tasks');
    }
}

exports.show = async function(req, res, next) {

    try{
        let id = req.params.id;

        id = id.replace( /[^\d].*/, '' );

        id = Number(id);

        if(typeof id != 'number'){
            // throw error
        }

        let task = await tasksService.getById(id);

        if(!task){
            res.status(404);

            res.render('task', {
                title: 'Tasks',
                currentPage: 'home',
                task: {
                    title: 'Task not found'
                },
                valid: false
            });

        }
        res.render('task', {
            title: 'Tasks',
            currentPage: 'home',
            task
        });

    }
    catch (e){
        console.log(e);
    }

}

function validateAndCreateTaskFormData(body){

    let title = body.title;
    let description = body.description;

    let formData = {
        valid: true,
        title: {
            value: title
        },
        description: {
            value: description
        }
    };

    if(!title || title.length < 1){
        formData.title = {
            value: title,
            valid: false,
            errorMsg: 'Enter a valid title'
        }

        formData.valid = false;
    }

    if(!description || description.length < 1){
        formData.description = {
            value: description,
            valid: false,
            errorMsg: 'Enter a valid description'
        }

        formData.valid = false;
    }

    return formData;
}

exports.destroy = async function (req, res, next) {

    let id = req.params.id;

    await tasksService.deleteById(id);

    res.redirect('/');

}

exports.edit = async function (req, res, next) {

    try{
        let id = req.params.id;

        id = id.replace( /[^\d].*/, '' );

        id = Number(id);

        if(typeof id != 'number'){
            // throw error
        }

        let task = await tasksService.getById(id);

    res.render('edit-task', {
            title: 'Edit Task',
            currentPage: 'home',
            task:task
    })
}
    catch (e){
        console.log(e);
    }
}

exports.update = async function (req, res, next) {

        let input = {title: req.body.title, description: req.body.description, id: req.body.id};

        let task = await tasksService.editTask(input);

        console.log(task);

        res.redirect('/tasks');
    }