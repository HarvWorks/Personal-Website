////////////////////////////////////////////////////////////
//                       Controllers                      //
////////////////////////////////////////////////////////////

var friends = require('../controllers/friends.js');

////////////////////////////////////////////////////////////
//                         Routes                         //
////////////////////////////////////////////////////////////

module.exports = function(app){

    console.log("Routes File Running");

    app.get('/poll', function(req, res) {
        friends.index(req,res);
    });

    app.get('/poll/:id', function(req, res) {
        friends.show(req,res);
    });

    app.post('/poll', function(req, res) {
        friends.create(req,res);
    });

    app.delete('/poll/:id', function(req, res) {
        friends.delete(req,res);
    });

    app.put('/poll/1/:id', function(req, res) {
        friends.poll1(req,res);
    });

    app.put('/poll/2/:id', function(req, res) {
        friends.poll2(req,res);
    });

    app.put('/poll/3/:id', function(req, res) {
        friends.poll3(req,res);
    });

    app.put('/poll/4/:id', function(req, res) {
        friends.poll4(req,res);
    });

};
