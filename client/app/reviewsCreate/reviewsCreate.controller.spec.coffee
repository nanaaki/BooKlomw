'use strict'

describe 'Controller: ReviewsCreateCtrl', ->

  # load the controller's module
  beforeEach module 'booKlomwApp'
  ReviewsCreateCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ReviewsCreateCtrl = $controller 'ReviewsCreateCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
