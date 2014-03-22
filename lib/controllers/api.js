'use strict';

var mongoose = require('mongoose'),
	Thing = mongoose.model('Thing'),
	Poll = mongoose.model('Poll');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
	return Thing.find(function(err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};

// JSON API for creating a new poll
// exports.create = function(req, res) {
// 	res.statusCode = 200;
// 	res.send('OK');
// };

// JSON API for creating a new poll
exports.createpoll = function(req, res) {

	var poll = new Poll(req.body);
	poll.save(function(err) {
		if (!err) {
			return console.log("created");
		} else {
			return console.log(err);
		}
	});
	return res.send(poll._id);


	//res.send('created demo');
};

exports.polls = function(req, res) {
	return Poll.find(function(err, polls) {
		if (!err) {
			return res.json(polls);
		} else {
			return res.send(err);
		}
	});
};