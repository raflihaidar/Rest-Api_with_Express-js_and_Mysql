const dbPool = require("../config/database");

const getJajanan_pasar = () => {
  const SQLquery = "SELECT * FROM express_mitrapasar.jajanan_pasar";
  return dbPool.execute(SQLquery);
};

const createNewProduct = (body) => {
  const SQLquery = `INSERT INTO express_mitrapasar.jajanan_pasar (product_name, description, price, stock, img, priceUser, quantity, status)
  VALUES (  
            '${body.product_name}', '${body.description}', ${body.price}, ${body.stock},
            '${body.img}', ${body.priceUser}, ${body.quantity}, ${body.status}
          )`;

  return dbPool.execute(SQLquery);
};

module.exports = {
  getJajanan_pasar,
  createNewProduct,
};
