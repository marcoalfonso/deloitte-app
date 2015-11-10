'use strict';

angular.module('deloitteAppApp').controller('MainCtrl', function ($scope, $http) {
  $scope.projects = [];

  $http.get('/api/projects').success(function(projects) {
    $scope.projects = projects;
  });

  $scope.addProject = function() {
    if($scope.newProject === '') {
      return;
    }
    $http.post('/api/projects', { name: $scope.newProject });
    $scope.newProject = '';
  };

  $scope.deleteProject = function(project) {
    $http.delete('/api/projects/' + project._id);
  };

  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'assets/images/image-1.png'
    },
    {
      image: 'assets/images/image-2.png'
    },
    {
      image: 'assets/images/image-3.png'
    }
  ];
});
