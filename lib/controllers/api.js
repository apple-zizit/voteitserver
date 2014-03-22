'use strict';

var mongoose = require('mongoose'),
	Thing = mongoose.model('Thing'),
	Poll = mongoose.model('Poll');


  var getGroupsDistinct = function (oPolls) {
        var lookup = {};
      // var items = oPolls;
      var oGropus = [];

     for (var i = 0; i < oPolls.length; i++) {
        var poll = oPolls[i];

        if (!(poll.group in lookup)) {
          lookup[poll.group] = 1;
          oGropus.push({
            name: poll.group,
            pollsCount: 1,
            category: poll.category,
          });
        } 
        else {
          lookup[poll.group]++; 
        }
      }   

      for (var i = 0; i < oGropus.length; i++) {
        oGropus[i].pollsCount = lookup[oGropus[i].name];
      }
      return oGropus;
  }

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

};

exports.groups = function(req, res) {

	//at the moment ignore location lat/lng sent in the query

	return Poll.find(function(err, polls) {
		if (!err) {
			return res.json(getGroupsDistinct(polls));
		} else {
			return res.send(err);
		}
	});
};


exports.polls = function(req, res) {
	var groupName = req.query.groupName;
	console.log("polls for: " + groupName);
	return Poll.find({group: groupName}, function(err, polls) {
		if (!err) {
			return res.json(polls);
		} else {
			return res.send(err);
		}
	});
};

exports.poll = function(req, res) {
	var pollId = req.query.pollId;
	console.log("poll for: " + pollId);
	return Poll.find(function(err, polls) {
		if (!err) {
			return res.json(polls);
		} else {
			return res.send(err);
		}
	});
};