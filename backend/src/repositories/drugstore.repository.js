const DrugstoreModel = require("../models/drugstore.model");

const data = [
  {
    id: 0,
    name: "Pharmacie de la République",
    address: "5 Avenue de la République, 75011 Paris",
    point: {
      lat: 48.866798,
      lng: 2.364322,
    },
    number_of_employees: 6,
  },
  {
    id: 1,
    name: "Pharmacie des Ternes",
    address: "61 Avenue des Ternes, 75017 Paris",
    point: {
      lat: 48.878628,
      lng: 2.295585,
    },
    number_of_employees: 8,
  },
  {
    id: 2,
    name: "Pharmacie du Trocadéro",
    address: "15 Place du Trocadéro et du 11 Novembre, 75116 Paris",
    point: {
      lat: 48.863194,
      lng: 2.289783,
    },
    number_of_employees: 5,
  },
  {
    id: 3,
    name: "Pharmacie de l'Opéra",
    address: "3 Rue Halévy, 75009 Paris",
    point: {
      lat: 48.870224,
      lng: 2.332066,
    },
    number_of_employees: 7,
  },
  {
    id: 4,
    name: "Pharmacie Monge",
    address: "74 Rue Monge, 75005 Paris",
    point: {
      lat: 48.841646,
      lng: 2.351636,
    },
    number_of_employees: 4,
  },
  {
    id: 5,
    name: "Pharmacie Lafayette",
    address: "1 Rue de la Fayette, 75009 Paris",
    point: {
      lat: 48.878609,
      lng: 2.343761,
    },
    number_of_employees: 9,
  },
  {
    id: 6,
    name: "Pharmacie du Marais",
    address: "14 Rue de Bretagne, 75003 Paris",
    point: {
      lat: 48.862207,
      lng: 2.361014,
    },
    number_of_employees: 3,
  },
  {
    id: 7,
    name: "Pharmacie du Louvre",
    address: "56 Rue des Petits Champs, 75001 Paris",
    point: {
      lat: 48.863994,
      lng: 2.338661,
    },
    number_of_employees: 6,
  },
];

const listDrugstores = () => {
  return data.map((e) => new DrugstoreModel(e));
};

const deleteDrugstore = (drugstoreId) => {
  // TODO
};

module.exports = {
  listDrugstores,
  deleteDrugstore,
};
