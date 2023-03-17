const express = require('express')
const app = express()
const port = 3000

app.get('/users/cool', (req, res) => {
  res.send('Eres genial!')
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});