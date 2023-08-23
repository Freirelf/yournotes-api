const express = require('express');

const app = express();

app.get('/message/:id/:user/:name', (request, response) => {
  const { id, user, name } = request.params
  response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.
    Para o name: ${name}.
  `)
})

app.get('/users', (request, response) => {
  const { page , limit} = request.query
  response.send(`página: ${page} and Mostrar: ${limit}`)
})

const PORT =  3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}.`));

/* post */ 

app.post('/users', (request, response) => {
  const { name, email, password } = request.body

  response.json({name, email, password})
  /*response.send(`Usuário: ${name}. Email: ${email}. E a senha é: ${password}`)*/
})