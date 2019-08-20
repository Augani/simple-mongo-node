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
        console.log("connected");
    });
}

exports.createUnique = (collection, uniqueField)=>{
  theDb.collection(collection).createIndex(uniqueField, { sparse: true, unique: true });
}

exports.find = (name,query, cb)=>{
    const coll = theDb.collection(name);
        coll.find(query).toArray(cb);
}

exports.insert = (name,data,multiple = false, cb)=> {
    const coll = theDb.collection(name);
    if(multiple){
      coll.insertMany(data, cb);
    }else{
      coll.insertOne(data, cb);
    }
};
exports.update = (name,cond,multiple = false, data, cb)=> {
    const coll = theDb.collection(name);
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
exports.delete = (name, cond, multiple = false, cb)=>{
    const coll = theDb.collection(name);
    if(multiple){
        coll.deleteMany(cond,cb)
    }else{
        coll.deleteOne(cond, cb);
    }
}