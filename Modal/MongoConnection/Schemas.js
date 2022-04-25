var mongoose = require('mongoose');

class MongoSchemas {

    userSchema = new mongoose.Schema({
        
        problem: String,
        diagnosed : String,
        physical : String,
        mental : String,
        howExperience : String,
        zeroToTenScale : String,
        otherInfo : String,
        notRelvent: String,
        whenLyingDown: String,
        whenSitting: String,
        underStanding: String,
        inWalking: String,
        Other: String
    })
}
module.exports = new MongoSchemas();
