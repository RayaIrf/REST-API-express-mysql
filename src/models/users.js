const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'select*from users'

    return     dbpool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  insert into users (name, email, address) 
                        values ('${body.name}', '${body.email}', '${body.address}')`

    return dbpool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  update users 
                        set name='${body.name}', email='${body.email}', address='${body.address}'
                        where id=${idUser}`;
    return dbpool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `delete from users where id=${idUser}`;

    return dbpool.execute(SQLQuery);
}
module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}