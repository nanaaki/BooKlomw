'use strict'

angular.module 'booKlomwApp'
.controller 'ReviewsIndexCtrl', ($scope, $http) ->
  $scope.reviews = []

  $http.get('/api/reviews').success (reviews) ->
    $scope.reviews = reviews
