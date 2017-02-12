////////////////////////////////////////////////////////////
//                   Global Varibles                     //
////////////////////////////////////////////////////////////

var success;
var sessionUser;

////////////////////////////////////////////////////////////
//                   Index controller                     //
////////////////////////////////////////////////////////////

app.controller('indexController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
        console.log("works!");
    };
}]);
