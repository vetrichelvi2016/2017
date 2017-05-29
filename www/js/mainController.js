app.controller('mainController', function($scope, $ionicActionSheet, $ionicBackdrop,
   $timeout,$ionicPopup,$ionicScrollDelegate,loginService,$ionicPlatform,$state,loginService,) {
// Is Triggered on a button click or on other event.
//side menu function
$scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

//form submit
$scope.data = {};
   $scope.login = function() {
       console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
   }

//menu click
$scope.goToLogin = function(){
  $ionicPlatform.ready(function(){
    $state.go("login");
  })
}

$scope.goToUser = function(){
  $ionicPlatform.ready(function(){
    $state.go("user");
  })
}
$scope.goToSetting = function(){
  $ionicPlatform.ready(function(){
    $state.go("setting");
  })
}


 $scope.myAcSheet = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Btn1- Like This' },
       { text: 'Btn2- Comment' }
     ],
     destructiveText: 'Delete',
     titleText: 'Edit Profile',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       if(index === 0){
         alert(index);
         $scope.showIonicBackdrop = function() {
        $ionicBackdrop.retain();
        $timeout(function() {
          $ionicBackdrop.release();
        }, 5000);
      };
	   // code for button 1
	   }
	   if(index === 1){
       alert(index);
	     // code for button 2
	   }
     }
   });

 };


 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Try again later!',
     template: 'No Connection Found.'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for advice.');
   });




 };
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
