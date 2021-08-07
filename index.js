const port = 3000
const server = require('./server')

server.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`)
})

