const { MongoClient } = require('mongodb');
const config = require('../config');

// sample of uri
//const uri = "mongodb://root:ipl@mongo_db:27017/";
const uri = "mongodb://"+config.MongoUser+":"+config.MongoPassword+"@"+config.MongoHost;

const client = new MongoClient(uri);
//const db = client.connect();

module.exports.list = async () => { 

  const database = client.db("exoplanets");
  const exoplanets = database.collection("exoplanets");
  const res = exoplanets.find({});
  console.log("result :" + JSON.stringify(res));
  const exoplanetsTable = res.toArray();
  console.log("model" + JSON.stringify(exoplanetsTable));
  return exoplanetsTable;
 
}

module.exports.save = async (data) => {
  const database = client.db("exoplanets");
  const exoplanets = database.collection("exoplanets");
  const res = exoplanets.insertOne({unique_name: data.unique_name, hclass: data.hclass, 
    discovery_year : data.discovery_year
   });
};


