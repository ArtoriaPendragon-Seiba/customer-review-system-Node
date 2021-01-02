"use strict";

const express = require("express");
const Item = require("./item");
const router = express.Router();

//get one item's information
router.get("/:id", (req, res) => {

	Item.findById(req.params.id, (err, item) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).json(item);
	});
});

//change a item's reviews
router.put("/:id", async (req, res) => {
	const { rating, name, comment } = req.body;
	Item.findById(req.params.id, (err, item) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		} else {
			console.log(item);
			item.rating =
				(item.rating * item.reviews.length + rating) /
				(item.reviews.length + 1);
			item.reviews.push({
				name: name,
				rating: rating,
				comment: comment,
			});
			item.save((err, newItem) => {
				if (err) {
					return res.status(500).send(err);
				}
				res.status(200).json(newItem);
			});
		}
	});
});

module.exports = router;
