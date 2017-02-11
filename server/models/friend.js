////////////////////////////////////////////////////////////
//                   Require Mongoose                     //
////////////////////////////////////////////////////////////

var mongoose = require('mongoose');

////////////////////////////////////////////////////////////
//                         Schemas                        //
////////////////////////////////////////////////////////////

var friendSchema = new mongoose.Schema({
    username: {type:String, required: true},
    question: {type:String, required: true},
    option1: {type:String, required: true},
    option2: {type:String, required: true},
    option3: {type:String, required: true},
    option4: {type:String, required: true},
    vote1: {type:Number, required: true},
    vote2: {type:Number, required: true},
    vote3: {type:Number, required: true},
    vote4: {type:Number, required: true},
},
{
    timestamps: true
});

////////////////////////////////////////////////////////////
//             Attaching Schemas to the Model             //
////////////////////////////////////////////////////////////

mongoose.model('mongoose_friend', friendSchema);

////////////////////////////////////////////////////////////
//           Passing Model to the Controllers             //
////////////////////////////////////////////////////////////

var mongoose_friend = mongoose.model('mongoose_friend');

console.log("model file is working");
