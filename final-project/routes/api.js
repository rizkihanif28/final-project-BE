// TODO 2: SETUP ROUTING (ROUTER)

// import PatientsController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");
const validatePatient = require("../middleware/validatePatient");

// membuat objek baru routing
const router = express.Router();

// membuat routing covid
router.get("/patients", PatientController.index);
router.post("/patients", validatePatient, PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/:id", PatientController.show);
router.get("/patients/search/:name", PatientController.search);
router.get("/patients/status/:status", PatientController.positive);
router.get("/patients/status/:recovered", PatientController.recovered);
router.get("/patients/status/:dead", PatientController.dead);

// export routing
module.exports = router;
