'use strict';

angular.module('deloitteAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.projects = [];

    $http.get('/api/project').success(function(projects) {
      $scope.projects = projects;
    });

    $scope.addProject = function() {
      if($scope.newProject === '') {
        return;
      }
      $http.post('/api/project', { name: $scope.newProject });
      $scope.newProject = '';
    };

    $scope.deleteProject = function(project) {
      $http.delete('/api/projects/' + project._id);
    };
  });
