const express = require("express");
const userRoutes = require("../services/user");
let router = express.Router();

router.get("/", userRoutes.GET_USERS);
router.get("/:id", userRoutes.GET_USER_DETAIL);
router.post("/", userRoutes.CREATE_USER);
router.put("/:id", userRoutes.UPDATE_USER);

module.exports = router;
