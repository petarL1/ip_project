const mysqlConfig = require('../connections/mysql');
const connection = mysqlConfig.connection;

getAll = () =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM tasks ',  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

getById = (id) =>{
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM tasks WHERE id = ' + id,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements[0]);
        });
    });
};

module.exports = {
    getAll,
    getById
}