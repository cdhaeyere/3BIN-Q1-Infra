const { Client } = require('pg');
const config = require('../config');

const client = new Client({
    user: config.PgUser,
    host: config.PgHost,
    database: config.PgDb,
    password: config.PgPassword,
    port: 5432,
});
client.connect();

module.exports.list = async () => { 

  const res = await client.query('SELECT * FROM EXOPLANETS');
    
   console.log("result" + JSON.stringify(res));
    
    // console.log ("ligne 1  : " + res.rows[0].exoplanet_id);
    //console.log ("ligne 1  : " + res.rows[0].unique_name);
    exoplanetsTable = res.rows;
    // await client.end();
    console.log("model" + JSON.stringify(exoplanetsTable));
   return exoplanetsTable;
 
}

module.exports.save = async (data) => {
  const res = await client.query('INSERT INTO EXOPLANETS(unique_name,hclass, discovery_year) VALUES ($1,$2,$3)', 
  [data.unique_name, data.hclass, data.discovery_year]);
};


