const jajananPasarModules = require("../models/jajanan_pasar");

const getJajanan_pasar = async (req, res) => {
  try {
    const [data] = await jajananPasarModules.getJajanan_pasar();
    res.json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const createNewProduct = async (req, res) => {
  const { body } = req;
  try {
    await jajananPasarModules.createNewProduct(body);
    res.json({
      message: "CREATE NEW PRODUCT SUCCESS",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
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
