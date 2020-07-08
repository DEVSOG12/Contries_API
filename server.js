const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('all_countries.json');
const route1r = jsonServer.router('countries.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(route1r);

server.listen(port);