/*
find(),
finbyId(id),
findbyFilter(filter),
insert(payload),
update(payload, id),
del(id)
*/

const db = require("../../data/db-config");


function find() {
    return db("users").select("nickname", "username");
  }


function findbyFilter(filter) {
    return db("users").where(filter);
}

async function create(payload) {
    const [id] = await db('users').insert(payload);
    const createdUser = await db("users").where({id}).first();
    return createdUser;
}

module.exports = {
    find,
    findbyFilter,
    create
}