const mongo = require('mongodb').MongoClient;
var theDb = null;
var dbName = null;
exports.init = function(url, dbName){
    mongo.connect(url, (err, client)=>{
        if(err){
            console.log(err);
        }
        dbName = dbName;
        theDb =  client.db(dbName);
    });
}
exports.find = (query, cb)=>{
    const coll = theDb.collection(dbName);
        coll.find(query).toArray(cb);
}
exports.insert = (data,multiple = false, cb)=> {
    const coll = theDb.collection(dbName);
    if(multiple){
      coll.insertMany(data, cb);
    }else{
      coll.insertOne(data, cb);
    }
};
exports.update = (cond,multiple = false, data, cb)=> {
    const coll = theDb.collection(dbName);
    if(multiple){
    coll.updateMany({
      cond
      }, {
       '$set': data
      }, cb)
    }else{
      coll.updateOne({
        cond
     }, {
         '$set': data
     }, cb);
    }
   
};
exports.delete = (cond, multiple = false, cb)=>{
    const coll = theDb.collection(dbName);
    if(multiple){
        coll.deleteMany(cond,cb)
    }else{
        coll.deleteOne(cond, cb);
    }
}