const UserModel = require("../models/Usermodels");

exports.createUser = (req, res) => {
  let email = req.body.email;
  lowerCaseEmail = email.toLowerCase().trim();

  const user = new UserModel({
    forename: req.body.forename,
    surname: req.body.surname,
    email: lowerCaseEmail,
    password: req.body.password,
    age: req.body.age,
    team: req.body.team,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({ Success: true, result: result });
    })
    .catch((err) => {
      res.json({ success: false, result: err });
    });
};

exports.getUsers = (req, res) => {
  UserModel.find()
    .then((result) => {
      res.status(200).json({ Success: true, result: result });
    })
    .catch((err) => {
      res.json({ success: false, result: err });
    });
};

exports.getUser = (req, res) => {
  const user = req.params.userId;
  UserModel.findById(user)
    .then((result) => {
      res.status(200).json({ Success: true, result: result });
    })
    .catch((err) => {
      res.json({ success: false, result: err });
    });
};
exports.deleteUser = (req, res) => {
  UserModel.findByIdAndRemove(req.params.userId)
    .then((result) => {
      if (!result) res.status(404).send("No item found");

      res.status(200).json({ Success: true, message: "item Deleted" });
    })
    .catch((err) => {
      res.json({ success: false, result: err });
    });
};

exports.UpdateUser = (req, res) => {
  console.log(req.body);
    UserModel.findByIdAndUpdate(req.params.userId, req.body, {new:true})
        
    .then((result) => {
     
          if (!result) res.json({ message: "nothing to Update" });

      res.status(200).json({ Success: true, result: result });
    })
    .catch((err) => {
      res.json({ success: false, result: err });
    });
};
