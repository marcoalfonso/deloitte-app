'use strict';

angular.module('deloitteAppApp').controller('MainCtrl', function ($scope, $http, $modal) {
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
      image: 'assets/images/image-1.png',
      alt: 'Carousel Image One'
    },
    {
      image: 'assets/images/image-2.png',
      alt: 'Carousel Image Two'
    },
    {
      image: 'assets/images/image-3.png',
      alt: 'Carousel Image Three'
    }
  ];

  $scope.openModal = function() {
    $modal.open({
      templateUrl: 'myModalContent.html',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

});
