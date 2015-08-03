'use strict'

describe 'Controller: ReviewsIndexCtrl', ->

  # load the controller's module
  beforeEach module 'booKlomwApp'
  ReviewsIndexCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ReviewsIndexCtrl = $controller 'ReviewsIndexCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
