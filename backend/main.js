const express = require('express');
const drugstoreController = require("./src/controllers/drugstore.controller");

const app = express();
const PORT = 3310;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);

app.get("/drugstore",drugstoreController.listDrugstore);
app.delete("/drugstore/:id",drugstoreController.deleteDrugstore);

module.exports = app;