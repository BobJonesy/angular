(function () {
   "use strict";

   var lunchApp = angular.module("LunchCheck", []);

   lunchApp.controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
      $scope.lunchList = "";
      $scope.lunchMessage = "";
      $scope.lunchSuccess = "black";
      $scope.checkClick = function() {

         if ($scope.lunchList == "") {
            $scope.lunchMessage = "Please enter data first";
            $scope.lunchSuccess = "red";
            return;
         }

         var lunchArray = $scope.lunchList.split(',');
         var lunchCount = 0;
         for (var i = 0; i < lunchArray.length; i++) {
            if (lunchArray[i].replace(/\s/g, '').length) {
               lunchCount += 1;
            }
         }

         if (lunchCount > 3) {
            $scope.lunchMessage = "Too much!";
            $scope.lunchSuccess = "green";
            return;
         }
         else if (lunchCount >= 1) {
            $scope.lunchMessage = "Enjoy!";
            $scope.lunchSuccess = "green";
            return;
         }

         $scope.lunchMessage = "Please enter data first";
         $scope.lunchSuccess = "red";
      }
   };

})();