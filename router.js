"use strict";

const express = require("express");
const router = express.Router();
const list = require("./list");
const detail = require("./detail");

//handle getting user list
router.use("/items/list", list);

router.use("/items", detail);



module.exports = router;
