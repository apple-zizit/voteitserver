'use strict';

var mongoose = require('mongoose'),
  Poll = mongoose.model('Poll'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

// //Clear old things, then add things in
// Thing.find({}).remove(function() {
//   Thing.create({
//     name: 'HTML5 Boilerplate',
//     info: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
//     awesomeness: 10
//   }, {
//     name: 'AngularJS',
//     info: 'AngularJS is a toolset for building the framework most suited to your application development.',
//     awesomeness: 10
//   }, {
//     name: 'Karma',
//     info: 'Spectacular Test Runner for JavaScript.',
//     awesomeness: 10
//   }, {
//     name: 'Express',
//     info: 'Flexible and minimalist web application framework for node.js.',
//     awesomeness: 10
//   }, {
//     name: 'MongoDB + Mongoose',
//     info: 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
//     awesomeness: 10
//   }, function() {
//     console.log('finished populating things');
//   });
// });

Poll.find({}).remove(function() {
  Poll.create({
    group: "VoteIt team",
    category: 'ion-beer',
    question: 'Should we limit the radius ?',
    radius: 500,
    timeout: '',
    choices: [{
      text: 'Yes',
      userIds: [], //this is actually the number of votes for this choice
      //calculated
      votes: 5
    }, {
      text: 'No',
      userIds: [],
      votes: 2
    }, {
      text: 'Just for the demo',
      userIds: [],
      votes: 2
    }]
  }, function() {
    console.log('finished populating things');
  });
});