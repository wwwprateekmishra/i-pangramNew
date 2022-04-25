var mongoose = require('mongoose');
class MongodbConnection {
    connect(url, databaseName) {
        var finalUrl = url + "/" + databaseName;
        mongoose.connect(finalUrl,{
            useNewUrlParser: true
          }).then(() => {
           
        }).catch((err) => {
            console.log(err, 'Database connection error !');
           
        });
    }
}
module.exports = new MongodbConnection();