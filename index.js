const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const PORT = process.env.PORT || 3000
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:' + PORT)
    })
})