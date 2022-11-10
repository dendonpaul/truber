const OwnerModel = require("../models/OwnerModel");
const bcrypt = require("bcrypt");

const getOwner = (req, res) => {
  res.send("Get Owner Controller");
};

//Register new owner
const registerOwner = async (req, res) => {
  const { firstname, lastname, mobile, email, password, address } = req.body;

  const createOwner = new OwnerModel({
    firstname,
    lastname,
    mobile,
    email,
    password,
    address,
  });

  //Bcrypt password
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (hash) {
      createOwner.password = hash;
      const saved = createOwner.save().then((response) => res.send(response));
    }
  });
};

module.exports = { getOwner, registerOwner };
