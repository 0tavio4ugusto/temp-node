const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page!')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We couldn't find the page you were looking for :( </p>
    <a href="/">Home page</a>`
    )
})

server.listen(5000)