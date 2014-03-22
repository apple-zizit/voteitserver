// var mongoose = require('mongoose');

// var voteSchema = new mongoose.Schema({ userId: 'String' });

// var choiceSchema = new mongoose.Schema({ 
// 	text: String,
// 	votes: [voteSchema]
// });

// exports.PollSchema = new mongoose.Schema({
// 	question: { type: String, required: true },
// 	choices: [choiceSchema]
// });

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var voteSchema = new mongoose.Schema({
	userId: 'String'
});


var choiceSchema = new mongoose.Schema({
	text: String,
	userIds: [voteSchema]
});

var location = {
      lat:String,
      lng:String
};

var PollSchema = new Schema({
	group: String,
	category: String,
	question: String,
	radius: Number,
	timeout: String,
	choices: [choiceSchema],
	center: location
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Poll', PollSchema);