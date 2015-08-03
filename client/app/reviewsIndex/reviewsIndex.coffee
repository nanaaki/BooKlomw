'use strict'

angular.module 'booKlomwApp'
.config ($stateProvider) ->
  $stateProvider.state 'reviewsIndex',
    url: '/reviews'
    templateUrl: 'app/reviewsIndex/reviewsIndex.html'
    controller: 'ReviewsIndexCtrl'
