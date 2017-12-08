const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    connection: { // default is 'undefined'
      contactPoints: ["127.0.0.1"]
    },
  },
  development: {
    connection: { // default is 'undefined'
      contactPoints: ["127.0.0.1"]
    },
  }
};