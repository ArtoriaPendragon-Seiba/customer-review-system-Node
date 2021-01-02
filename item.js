"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	photoPath: String,
	name: String,
	reviews: Array,
	rating: Number,
},{collection:'review'});
//SoldierSchema.index({ "$**": "text" });
module.exports = mongoose.model("Review", ReviewSchema);
