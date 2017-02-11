app.factory('factory', ['$http',function($http) {

    ////////////////////////////////////////////////////////////
    //                        Variables                       //
    ////////////////////////////////////////////////////////////

    var friends = [];
    var friend = {};

    ////////////////////////////////////////////////////////////
    //                        Factory                         //
    ////////////////////////////////////////////////////////////

    var factory = {};

    // factory.createUser = function(newUser, callback) {
    //     if (typeof(newUser) === 'object') {
    //         $http.post('/friends', newUser).then(function(returnData){
    //             if (typeof(callback) == 'function'){
    //                 callback();
    //             }
    //         });
    //     }
    // };

    factory.index = function(callback) {
        $http.get('/poll').then(function(returnData){
            friends = returnData.data;
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    factory.create = function(poll, callback) {
        if (typeof(poll) === 'object') {
            console.log(poll);
            $http.post('/poll', poll).then(function(returnData){
                console.log(returnData);
                if (typeof(callback) == 'function'){
                    callback();
                }
            });
        }
    };

    // factory.update = function(updateUser, id, callback) {
    //     if (typeof(updateUser) === 'object') {
    //         $http.put('/friends/' + id, updateUser).then(function(returnData){
    //             if (typeof(callback) === 'function') {
    //                 callback(returnData.data);
    //             }
    //         });
    //     }
    // };

    factory.show = function(id, callback) {
        $http.get('poll/' + id).then(function(returndata){
            if (typeof(callback) === 'function') {
                returndata.data.birthday = new Date(returndata.data.birthday);
                friend = returndata.data;
                callback(returndata.data);
            }
        });
    };

    factory.delete = function(id, callback) {
        $http.delete('/poll/' + id).then(function(returnData){
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    factory.vote1 = function(id, callback) {
        $http.put('/poll/1/' + id).then(function(returnData){
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    factory.vote2 = function(id, callback) {
        $http.put('/poll/2/' + id).then(function(returnData){
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    factory.vote3 = function(id, callback) {
        $http.put('/poll/3/' + id).then(function(returnData){
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    factory.vote4 = function(id, callback) {
        $http.put('/poll/4/' + id).then(function(returnData){
            if (typeof(callback) === 'function') {
                callback(returnData.data);
            }
        });
    };

    return factory;

}]);
