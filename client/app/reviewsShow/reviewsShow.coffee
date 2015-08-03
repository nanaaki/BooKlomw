'use strict'

angular.module 'booKlomwApp'
.config ($stateProvider) ->
  $stateProvider.state 'reviewsShow',
    url: '/reviews/show/:id'
    templateUrl: 'app/reviewsShow/reviewsShow.html'
    controller: 'ReviewsShowCtrl'
