const mysqlConfig = require('../connections/mysql');
const connection = mysqlConfig.connection;

getAll = () =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,title,description,DATE_FORMAT(date_created, "%a %e %M %H:%i") as date_created FROM tasks ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

editTask = (input) =>{
    return new Promise((resolve, reject) => {
        connection.query("UPDATE tasks SET title='"+input.title+"', description='"+input.description+"' WHERE id ="+input.id, (error, tasks)=>{
            if(error){
                return reject(error);
            }
            return resolve(tasks);
        });
    });
};

storeNew = (input) =>{
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO tasks (title, description) VALUES ('" + input.title + "', '" + input.description + "')";

        connection.query(sql,  (error, tasks)=>{
            if(error){
                return reject(error);
            }
            return resolve(tasks);
        });
    });
};

deleteById = (id) =>{
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM tasks WHERE id = " + id;

        connection.query(sql, (error, tasks)=> {
            if(error){
                return reject(error);
            }
            return resolve(tasks);
        });
    });
};

getById = (id) =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,title,description,DATE_FORMAT(date_created, "%a %e %M %H:%i") as date_created FROM tasks WHERE id = ' + id,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements[0]);
        });
    });
};

module.exports = {
    getAll,
    storeNew,
    deleteById,
    getById,
    editTask
}