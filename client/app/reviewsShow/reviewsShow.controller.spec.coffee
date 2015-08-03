'use strict'

describe 'Controller: ReviewsShowCtrl', ->

  # load the controller's module
  beforeEach module 'booKlomwApp'
  ReviewsShowCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ReviewsShowCtrl = $controller 'ReviewsShowCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
