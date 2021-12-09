module.exports = app => {
    const hospitals = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Hospital
    router.post("/", hospitals.create);
  
    // Retrieve all hospitals
    //router.get("/", hospitals.findAll);
  
    // Retrieve a single Hospital with id
   router.get("/:id", hospitals.findOne);
  
    // Update a Hospital with id
    router.put("/:id", hospitals.update);
  
    // Delete a Hospital with id
    router.delete("/:id", hospitals.delete);
  
    // Create a new Hospital
    router.delete("/", hospitals.deleteAll);

  //Retrieve by nearest distance
    router.get("/", hospitals.find);
    
    app.use('/api/hospitals', router);
  };
  