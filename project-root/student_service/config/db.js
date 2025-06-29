const {Pool} = require('pg');

const pool = new Pool({
    user:"postgres",
    database:"school",
    port:"5432",
    password:"1111"
})

module.exports=pool