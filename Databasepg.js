const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Mm123456',
    database: 'postgres'
})

client.connect()

client.query('SELECT * FROM Users', (res, err)=> {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }
    client.end()
})