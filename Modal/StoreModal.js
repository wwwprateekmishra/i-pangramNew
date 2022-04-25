const MongodbConnection = require('./MongoConnection/mongoConnection');
const allSchema = require('./MongoConnection/Schemas');
const mongoose = require('mongoose')
class StoreModel {
    constructor() {
        this.StoreSchema = allSchema.userSchema;
        MongodbConnection.connect("mongodb://127.0.0.1:27017", "pangram");
    }

    /*-----------------------here insert new Store --------------------------*/

    async addUser(dataObject) {
        console.log(dataObject);
        let Store = new mongoose.model('store', this.StoreSchema);
        let StoreData = new Store(dataObject);
        let result = await StoreData.save().then((res) => {
            console.log(res);
           return true;
        }).catch((e) => {
            console.log(e);
            return false;
        });
        return result;
    }

    /*-----------------------here find Store --------------------------*/

    async findData() {
        let Store = new mongoose.model('store', this.StoreSchema);
        let result = await Store.find().then((res) => {
            return res;
        }).catch((err) => {
            return err;
        });
        return result;
    }
}
module.exports = new StoreModel();