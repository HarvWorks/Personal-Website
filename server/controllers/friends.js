////////////////////////////////////////////////////////////
//                   Importing Mongoose                   //
////////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var mongoose_friends = mongoose.model('mongoose_friend');

////////////////////////////////////////////////////////////
//                   Friends Controller                   //
////////////////////////////////////////////////////////////

module.exports = {

    index: function(req, res) {
        mongoose_friends.find({}, function(err, polls) {
            if(err){
                res.json("Error");
            }
            else {
                res.json(polls);
            }
        });
    },

    show: function(req, res) {
        mongoose_friends.findOne({_id: req.params.id},function(err, poll) {
            if(err) {
                res.json("Error");
            }
            else {
                res.json(poll);
            }
        });
    },

    create: function(req, res) {
        console.log(req.body);
        var mongoose_friend = new mongoose_friends(req.body);
        mongoose_friend.save(function(err) {
            if(err) {
                res.json("Error");
            }
            else {
                res.json("Success!");
            }
        });
    },

    delete: function(req, res) {
        mongoose_friends.remove({_id: req.params.id}, function(err) {
            if(err) {
                res.json("Error");
            }
            else {
                res.json("Success!");
            }
        });
    },

    poll1: function(req, res) {
        mongoose_friends.findOne({_id: req.params.id},function(err, polls) {
            if(err) {
                res.json("Error");
            }
            else {
                polls.vote1 ++;
                polls.save(function(err, updated) {
                    if(err) {
                        res.json("Error");
                    }
                    else {
                        res.json(updated);
                    }
                });
            }
        });
    },

    poll2: function(req, res) {
        mongoose_friends.findOne({_id: req.params.id},function(err, polls) {
            if(err) {
                res.json("Error");
            }
            else {
                polls.vote2 ++;
                polls.save(function(err, updated) {
                    if(err) {
                        res.json("Error");
                    }
                    else {
                        res.json(updated);
                    }
                });
            }
        });
    },

    poll3: function(req, res) {
        mongoose_friends.findOne({_id: req.params.id},function(err, polls) {
            if(err) {
                res.json("Error");
            }
            else {
                polls.vote3 ++;
                polls.save(function(err, updated) {
                    if(err) {
                        res.json("Error");
                    }
                    else {
                        res.json(updated);
                    }
                });
            }
        });
    },

    poll4: function(req, res) {
        mongoose_friends.findOne({_id: req.params.id},function(err, polls) {
            if(err) {
                res.json("Error");
            }
            else {
                polls.vote4 ++;
                polls.save(function(err, updated) {
                    if(err) {
                        res.json("Error");
                    }
                    else {
                        res.json(updated);
                    }
                });
            }
        });
    },
};
