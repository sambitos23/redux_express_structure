let config = require("../config/config");

module.exports = (server) => {
  var user_module = {

    add_user: (new_user, callBack) => {
      server.db().collection(config.collection.user).insertOne(new_user, (err, doc) => {
        if (err) {
          console.log(err);
          callBack(true, config.response.error);
        } else {
          callBack(false, config.response.success);
        }
      })
    }

  };
  return user_module;
};