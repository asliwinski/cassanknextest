const cassanKnex = require('../connection');

function getAllItems() {
  return new Promise(function (resolve, reject) {
    cassanKnex('itemspace')
      .select("id")
      .from("items")
      .exec(function (err, res) {
        if (err) reject(err);

        resolve(res.rows);

      });
  });
}

module.exports = {
  getAllItems
};