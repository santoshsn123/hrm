import { Admin } from "../../../models";

exports.loginApi = (req, res) => {
  Admin.findAndCountAll({ username: "Santosh" }).then(data => {
    console.log("Created : - ", data);
    res.send(data);
  });
};
