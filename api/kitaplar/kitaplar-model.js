const db = require('../../data/db-config');


function findById(id) {
    //return db('kitaplar').where('id', id).first();   //object yoksa null
    return db('kitaplar').where({ id }).first(); 
}

function findByFilter(filter) {   //object olarak gelecek  {name: "emre", surname: "Sahiner"}
    return db('kitaplar').where(filter);   //Array yoksa []
}

function add(kitap) {   //object olarak gelecek

}

function update(kitap, id){

}

function del(id) {

}

/* 
SELECT c.CustomerName, o.OrderDate,e.FirstName,s.ShipperName FROM Orders As o
Join Customers As c ON o.CustomerID=c.CustomerID
Join Employees As e ON o.EmployeeID=e.EmployeeID
Join Shippers AS s ON o.ShipperID=s.ShipperID
*/


function find() {
    /* 
    SELECT c.CustomerName, o.OrderDate,e.FirstName,s.ShipperName FROM Orders As o
    Join Customers As c ON o.CustomerID=c.CustomerID
    Join Employees As e ON o.EmployeeID=e.EmployeeID
    Join Shippers AS s ON o.ShipperID=s.ShipperID
    */
    return db('Orders as o')
            .join('Customers as c', 'o.CustomerID', 'c.CustomerID')
            .join('Employees as e', 'o.EmployeeID', 'e.EmployeeID')
            .join('Shippers as s', 'o.ShipperID', 's.ShipperID')
            .select('CustomerName', 'OrderDate','FirstName','ShipperName' );
}



module.exports = {
    find,
findById,
findByFilter,
add,
update,
del
}

