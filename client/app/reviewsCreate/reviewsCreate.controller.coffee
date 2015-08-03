'use strict'

angular.module('booKlomwApp')
.controller 'ReviewsCreateCtrl', ($scope, $http, $location, $resource) ->
  $scope.tags = [{text: 'hogehgoe'}, {text: 'hogehuga'}]

  $scope.submit = ->
    $http.post('/api/reviews', $scope.review).success ->
      $location.path('reviews')

  $scope.loadTags = (query)->
    return $http.get('/api/tags?query=' + query)

  return
