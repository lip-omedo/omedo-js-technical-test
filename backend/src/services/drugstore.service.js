const repository = require("../repositories/drugstore.repository");

const listDrugstores = () => {
  // TODO sort by distance
  return repository.listDrugstores();
};

const deleteDrugstore = (drugstoreId) => {
  // TODO
};

module.exports = {
  listDrugstores,
  deleteDrugstore,
};
