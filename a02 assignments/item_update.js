const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'pranvk',
    password: 'cdac',
    database: 'wptassign',
    port: '3306'
}
const con = mysql.createConnection(dbparams);
let itemno = 3;

con.query("update item set category='smartphone' where itemno = ?",[itemno],
(err, res)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Done');
        console.log(res.affectedRows);
  
    }
});