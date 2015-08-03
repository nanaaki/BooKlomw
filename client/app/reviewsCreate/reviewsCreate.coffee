'use strict'

angular.module 'booKlomwApp'
.config ($stateProvider) ->
  $stateProvider.state 'reviewsCreate',
    url: '/reviews/create'
    templateUrl: 'app/reviewsCreate/reviewsCreate.html'
    controller: 'ReviewsCreateCtrl'
