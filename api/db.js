import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Wianwian@1',
    database: 'bau'
});

