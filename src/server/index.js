const Koa = require('koa');
const itemRoutes = require('./routes/items');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(itemRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;