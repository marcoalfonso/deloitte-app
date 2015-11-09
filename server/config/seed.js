/**
 * Populate DB with sample data on server start
 */

'use strict';

var Project = require('../api/project/project.model');


Project.find({}).remove(function() {
  Project.create({
    name : 'Project 1',
    info : 'Lorem ipsum dolor sit amet'
  }, {
    name : 'Project 2',
    info : 'Lorem ipsum dolor sit amet'
  }, {
    name : 'Project 3',
    info : 'Lorem ipsum dolor sit amet'
  },  {
    name : 'Project 4',
    info : 'Lorem ipsum dolor sit amet'
  });
});