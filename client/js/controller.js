////////////////////////////////////////////////////////////
//                   Global Varibles                     //
////////////////////////////////////////////////////////////

var success;
var sessionUser;

////////////////////////////////////////////////////////////
//                   Index controller                     //
////////////////////////////////////////////////////////////

app.controller('indexController', ['$scope', 'factory', '$location', function($scope, factory, $location) {
    $scope.input = {};
    $scope.input.name = "";
    $scope.success = success;
    success = "";
    $scope.addUser = function(){
        console.log("Moo");
        $scope.error = {};
        var error = 0;
        if($scope.input.name.length < 3){
            $scope.error.name = "Please enter a name longer than 2 characters";
            error ++;
        }
        if (error === 0) {
            // success = $scope.input.name + " has been created!";
            sessionUser = $scope.input.name;
            $location.url('/dashboard');
        }
    };
}]);

////////////////////////////////////////////////////////////
//                 Dashboard controller                   //
////////////////////////////////////////////////////////////

app.controller('dashboardController', ['$scope', 'factory', '$location', '$routeParams', function($scope, factory, $location, rParams) {
    $scope.user = sessionUser;
    $scope.success = success;
    success = "";
    $scope.input = {};
    $scope.logout = function(){
        success = sessionUser + " has logout!";
        sessionUser = "";
        $location.url('/');
    };
    $scope.createPoll = function(){
        $location.url('/create');
    };
    $scope.deletePoll = function(id){
        factory.delete(id, function callback(data) {
            $scope.success = "Poll has been removed";
            factory.index(function callback(data) {
                $scope.posts = data;
            });
        });
    };
    var index = function() {
        factory.index(function callback(data) {
            $scope.posts = data;
        });
    };
    index();
}]);

////////////////////////////////////////////////////////////
//                   Topic controller                     //
////////////////////////////////////////////////////////////

app.controller('topicController', ['$scope', 'factory', '$location', function($scope, factory, $location) {
    $scope.user = sessionUser;
    $scope.input = {};
    $scope.error = {};
    $scope.input.question = "";
    $scope.input.option1 = "";
    $scope.input.option2 = "";
    $scope.input.option3 = "";
    $scope.input.option4 = "";
    $scope.cancel = function(){
        $location.url('/');
    };
    $scope.createPoll = function(){
        $scope.error = {};
        var error = 0;
        if($scope.input.question.length < 9){
            $scope.error.question = "Please enter a valid question longer than 8 characters";
            error ++;
        }
        if($scope.input.option1.length < 4){
            $scope.error.option1 = "Please enter a valid question longer than 3 characters";
            error ++;
        }
        if($scope.input.option2.length < 4){
            $scope.error.option2 = "Please enter a valid question longer than 3 characters";
            error ++;
        }
        if($scope.input.option3.length < 4){
            $scope.error.option3 = "Please enter a valid question longer than 3 characters";
            error ++;
        }
        if($scope.input.option4.length < 4){
            $scope.error.option4 = "Please enter a valid question longer than 3 characters";
            error ++;
        }
        if (error === 0) {
            $scope.input.username = sessionUser;
            $scope.input.vote1 = 0;
            $scope.input.vote2 = 0;
            $scope.input.vote3 = 0;
            $scope.input.vote4 = 0;
            factory.create($scope.input, function callback(){
                success = $scope.input.question + " poll has been created!";
                $location.url('/dashboard');
            });
        }
    };
}]);

////////////////////////////////////////////////////////////
//                   Show controller                      //
////////////////////////////////////////////////////////////

app.controller('showController', ['$scope', 'factory', '$location', '$routeParams', function($scope, factory, $location, rParams) {
    $scope.user = sessionUser;
    var poll = function() {
        factory.show(rParams.id, function callback(data) {
            $scope.poll = data;
        });
    };

    $scope.vote1 = function() {
        factory.vote1(rParams.id, function callback(data) {
            $scope.poll = data;
        });
    };

    $scope.vote2 = function() {
        factory.vote2(rParams.id, function callback(data) {
            $scope.poll = data;
        });
    };

    $scope.vote3 = function() {
        factory.vote3(rParams.id, function callback(data) {
            $scope.poll = data;
        });
    };

    $scope.vote4 = function() {
        factory.vote4(rParams.id, function callback(data) {
            $scope.poll = data;
        });
    };
    poll();
}]);
