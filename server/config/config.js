//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://jeffreyshao:qwerty1234@ds123084.mlab.com:23084/jeffreyshao', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyAlCyTa5XSllHh0VvBEaVrqGVM9fE4Dt8'
  },
  port: 8080
};
