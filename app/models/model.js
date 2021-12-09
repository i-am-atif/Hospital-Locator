module.exports = (sequelize, Sequelize) => {
    const Hosp = sequelize.define("hosp", {
    name: {
			type: Sequelize.STRING
	  },
	speciality: {
			type: Sequelize.STRING
  	},
	city: {
			type: Sequelize.STRING
	  },
    pincode: {
			type: Sequelize.INTEGER
	  },
	latitude: {
			type: Sequelize.DECIMAL(9, 6)  
    },
    longitude: {
			type: Sequelize.DECIMAL(9, 6)  
    }

    });
  
    return Hosp;
  };