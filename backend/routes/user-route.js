module.exports = {
  configure: (app, server) => {
    var user_module = require("../modules/user-module")(server);


    app.post("/add_user", (req, res) => {
      user_module.verify_user(req.headers.token, (user_exists, type) => {
        if (user_exists=== true && type === "A") {
          let new_user = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
          }

          user_module.add_user(new_user, (error, message) => {
            if (error) {
              res.json({ status: false, message: message });
            } else {
              res.json({ status: true, message: message });
            }
          })
        } else {
          res.json({ status: false, message: "Unvalidated user" });
        }
      })

    })
  }
}