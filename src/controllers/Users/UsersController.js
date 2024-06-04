const mongoose = require('mongoose');
const UsersModel = require('../../models/Users/UsersModel');
const UserCreateServices = require('../../services/user/UserCreateServices');

exports.Registration = async (req, res) => {
     const Result = await UserCreateServices(req, UsersModel);
     res.status(200).json(Result);
};
