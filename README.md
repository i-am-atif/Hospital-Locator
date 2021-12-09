# Hospital-Locator

Backend application built on Node.js with express.
Used sequelize orm and postgreSql database with pgadmin4.

The schema of our database is 
hospital details:
Name
Speciality
Address
Pincode
Latitude
Longitude

Store Location(longitude + latitude) and find
nearest location upto a range(say 5km) according to user's location(longitude + latitude).

Doesn't work on static distance and static location
