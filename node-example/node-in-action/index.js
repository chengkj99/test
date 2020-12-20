const http =  require('http')
const port = 8000

const server = http.createServer((req, res) => {
    res.end('hello world')
})

server.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`)
})