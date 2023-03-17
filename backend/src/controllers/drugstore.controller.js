const service = require("../services/drugstore.service");

const listDrugstore = (req, res) => {
  res.send(service.listDrugstores());
};

const deleteDrugstore = (req, res) => {
  // TODO
};

module.exports = {
  listDrugstore,
  deleteDrugstore,
};
