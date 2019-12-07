const UserModel = require("../db/model");

const GET_USERS = async (req, res) => {
  try {
    let users = await UserModel.find({});

    if (users.length > 0) {
      return res.status(200).json({
        message: "users fetched successfully",
        data: users
      });
    }

    return res.status(404).json({
      code: "BAD_REQUEST_ERROR",
      description: "No users found in the system"
    });
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      description: "something went wrong, Please try again"
    });
  }
};
const GET_USER_DETAIL = async (req, res) => {
  try {
    let user = await UserModel.findById(req.params.id);
    if (user) {
      return res.status(200).json({
        message: `user with id ${req.params.id} fetched successfully`,
        data: user
      });
    }

    return res.status(404).json({
      code: "BAD_REQUEST_ERROR",
      description: "No users found in the system"
    });
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      description: "something went wrong, Please try again"
    });
  }
};

const CREATE_USER = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (email === undefined || email === "") {
      return res.status(422).json({
        code: "REQUIRED_FIELD_MISSING",
        description: "email is required",
        field: "email"
      });
    }

    let isEmailExists = await UserModel.findOne({
      email: email
    });

    if (isEmailExists) {
      return res.status(409).json({
        code: "ENTITY_ALREAY_EXISTS",
        description: "email already exists",
        field: "email"
      });
    }

    const temp = {
      name: name,
      email: email,
      age: age
    };

    let newUser = await UserModel.create(temp);

    if (newUser) {
      return res.status(201).json({
        message: "user created successfully",
        data: newUser
      });
    } else {
      throw new Error("something went worng");
    }
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      description: "something went wrong, Please try again"
    });
  }
};

const UPDATE_USER = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const id = req.params.id;
    if (id === undefined || id === "") {
      return res.status(422).json({
        code: "REQUIRED_FIELD_MISSING",
        description: "id is required",
        field: "id"
      });
    }
    const temp = {
      name: name,
      email: email,
      age: age
    };
    let editUser = await UserModel.findByIdAndUpdate(
      id,
      {
        $set: temp
      },
      {
        new: true
      }
    );

    if (editUser) {
      return res.status(201).json({
        message: "user updated successfully",
        data: editUser
      });
    } else {
      throw new Error("something went worng");
    }
  } catch (error) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      description: "something went wrong, Please try again"
    });
  }
};

module.exports = {
  GET_USERS,
  GET_USER_DETAIL,
  CREATE_USER,
  UPDATE_USER
};
