// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

});
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl:'templates/login.html',
    controller: 'mainController',
    cache: false,
  })
  .state('user',{
    url:'/user',
    templateUrl:'templates/user.html',
    controller:'mainController',
    cache: false,
  })
  .state('setting',{
  url:'/setting',
  templateUrl:'templates/setting.html',
  controller:'mainController',
  })
  $urlRouterProvider.otherwise('app/login');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
