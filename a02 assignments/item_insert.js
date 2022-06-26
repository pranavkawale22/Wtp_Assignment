const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'pranavk',
    password: 'cdac',
    database: 'wptassign',
    port: '3306'
}
const con = mysql.createConnection(dbparams);
let itemno = 3;
let itemname = 'Samsung s22';
let price = 0;
let category = 'Mobile';

con.query('insert into item (itemno, itemname, price, category) values (?, ?, ?, ?)',[itemno, itemname, price, category],
(err, res)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Done');
        console.log(res.affectedRows);
        
    }
});