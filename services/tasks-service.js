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

EditById = (input) =>{
    return new Promise((resolve, reject) => {
        let sql = "UPDATE tasks SET (title, description) VALUES ('" + input.title + "', '" + input.description + "')";

        connection.query(sql,  (error, tasks)=>{
            if(error){
                return reject(error);
            }
            return resolve(tasks);
        });
    });
};

module.exports = {
    getAll,
    storeNew,
    deleteById,
}