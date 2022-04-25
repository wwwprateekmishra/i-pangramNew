const storeModel = require('../Modal/StoreModal');

class StoreController{

    createStore = async (req, res, next)=>{
        let data = {problem :req.body.userInfo.problem,
            diagnosed:req.body.userInfo.diagnosed,
            physical:req.body.userInfo.physical,
            mental:req.body.userInfo.mental,
            howExperience:req.body.userInfo.howExperience,
            zeroToTenScale: req.body.userInfo.zeroToTenScale,
            otherInfo:req.body.userInfo.otherInfo,
            notRelvent : req.body.checkedInfo.notRelvent,
            whenLyingDown : req.body.checkedInfo.whenLyingDown,
            whenSitting : req.body.checkedInfo.whenSitting,
            underStanding : req.body.checkedInfo.underStanding,
            inWalking : req.body.checkedInfo.inWalking,
            Other : req.body.checkedInfo.Other
     }
        const result = await storeModel.addUser(data);
        (result) ? res.send({ status : 200, msg : req.body.storeName + ' Data added successfully !'}) : res.send({status : 500, msg : 'Internal Server error !'});
        next()
    }
    findData = async(req, res, next)=>{
        const result = await storeModel.findData();
        (result) ? res.send(result) : res.send([]) ;
    }
}
module.exports = new StoreController();