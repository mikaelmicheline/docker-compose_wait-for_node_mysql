const express = require("express")
const app = express()
app.use(express.json())

const port = 3300

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql2')

app.post('/', (req, res) => { 
  const name = "NomeProduto"

  const connection = mysql.createConnection(config)  
  connection.query(`INSERT INTO products (name) VALUES ("${name}");`)

  res.status(201).send({ name })
})

app.get('/', (req, res) => { 
  const connection = mysql.createConnection(config)  


  connection.execute(`SELECT * FROM products`,
    function(err, results, fields) {
      res.status(200).send(results)  
    })
})

app.listen(port, () => { console.log("rodando na porta", port) })