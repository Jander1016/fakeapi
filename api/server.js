// See https://github.com/typicode/json-server#module

import {create, router as _router, defaults,rewriter } from 'json-server';

const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)

server.use(rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server