"use strict";

const express = require("express");
const Item = require("./item");

const router = express.Router();

router.get("/", (req, res) => {
	const { searchKey, pageNum } = req.query;
	Item.find(
		{ name: { $regex: searchKey, $options: "i" } },
		null,
		{ skip: (pageNum - 1) * 50, limit: 50 },
		(err, items) => {
			if (err) {
				return res.status(500).send(err);
			}
			console.log(items);
			res.status(200).json(items);
		}
	);
});

module.exports = router;
