app.controller('mainController', function($scope, $ionicActionSheet, $ionicBackdrop, $timeout,$ionicPopup,$ionicScrollDelegate,loginService,) {
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

   $('#textarea1').textcomplete([
    { // emoji strategy
        id: 'emoji',
        match: /\B:([\-+\w]*)$/,
        search: function (term, callback) {
            callback($.map(emojies, function (emoji) {
                return emoji.indexOf(term) === 0 ? emoji : null;
            }));
        },
        template: function (value) {
            return '<img src="media/images/emoji/' + value + '.png"></img>' + value;
        },
        replace: function (value) {
            return ':' + value + ': ';
        },
        index: 1
    },
    { // tech companies
        id: 'tech-companies',
        words: ['apple', 'google', 'facebook', 'github'],
        match: /\b(\w{2,})$/,
        search: function (term, callback) {
            callback($.map(this.words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        index: 1,
        replace: function (word) {
            return word + ' ';
        }
    }
], {
    onKeydown: function (e, commands) {
        if (e.ctrlKey && e.keyCode === 74) { // CTRL-J
            return commands.KEY_ENTER;
        }
    }
});




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

    $scope.master = {name:"Tani",email:"tani@ymaill.com"};
    $scope.update = function(user){
    $scope.master = angular.copy(user);
    }
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
