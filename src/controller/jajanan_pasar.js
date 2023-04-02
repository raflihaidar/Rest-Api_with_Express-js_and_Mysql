const getJajanan_pasar = (req, res) => {
  const data = {
    id: "1",
    product_name: "Dadar Gulung",
    price: 3000,
  };
  res.json({
    data: data,
  });
};

const createNewProduct = (req, res) => {
  console.log(req.body);
  res.json({
    product_name: "Onde-Onde",
    data: req.body,
  });
};

const updateData = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    message: "Update Products Success",
    data: req.body,
  });
};

const deleteProducts = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    message: "Delete Products Success",
    data: {
      id: "1",
      name: "Dadar Gulung",
      price: 3000,
    },
  });
};

module.exports = {
  getJajanan_pasar,
  createNewProduct,
  updateData,
  deleteProducts,
};
