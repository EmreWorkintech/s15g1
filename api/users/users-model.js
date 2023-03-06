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

module.exports = {
    find,
    findbyFilter
}