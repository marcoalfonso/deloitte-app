/**
 * Populate DB with sample data on server start
 */

'use strict';

var Project = require('../api/project/project.model');


Project.find({}).remove(function() {
  Project.create({
    name : 'Project',
    info : 'Lorem ipsum dolor sit amet'
  }, {
    name : 'Project',
    info : 'Lorem ipsum dolor sit amet'
  }, {
    name : 'Project',
    info : 'Lorem ipsum dolor sit amet'
  },  {
    name : 'Project',
    info : 'Lorem ipsum dolor sit amet'
  });
});