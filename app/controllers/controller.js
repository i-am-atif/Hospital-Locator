const db = require("../models");
const Hosp = db.hosp;
const Op = db.Sequelize.Op;

// Create and Save a new Hospital
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Hospital
  const hosp = {
    name: req.body.name,
    speciality: req.body.speciality,
    city: req.body.city,
    pincode: req.body.pincode,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  // Save Hospital in the database
  Hosp.create(hosp)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hospital."
      });
    });
};
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * // Retrieve all Hospitals from the database.
exports.findAll = (req, res) => {
    const name = req.query.title;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Hosp.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving hospitals."
        });
      });
};
 */



// Find a single Hospital with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Hosp.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Hospital with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Hospital with id=" + id
        });
      });
};

// Update a Hospital by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Hosp.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Hospital was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Hospital with id=${id}. Maybe Hospital was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Hospital with id=" + id
      });
    });
  
};

// Delete a Hospital with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Hosp.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hospital was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Hospital with id=${id}. Maybe Hospital was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Hospital with id=" + id
        });
      });
};


// Delete all Hospitals from the database.
exports.deleteAll = (req, res) => {
    Hosp.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Hospitals were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all hospitals."
          });
        });
      };





 exports.find = (req, res) => {
  
 
      const lat2 = req.body.latitude;
      const long2 = req.body.longitude;

      var sequelize = require('sequelize');


      Hosp.findAll({
        where: 
        sequelize.fn('ST_DWithin',sequelize.literal('ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)::geography'),      
        sequelize.literal('ST_SetSRID(ST_MakePoint('+long2+','+lat2+'), 4326)::geography'), sequelize.literal('500'))})
        .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving hospitals."
            });
        });

    };
