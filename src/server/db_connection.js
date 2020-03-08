let MongoClient = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/timesheet`;
let db = null;
let client = null;


async function connectDB() {
    if (db) return db;
    return new Promise (async (resolve, reject) => {
        try {
            client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            db = client.db();
            resolve(db);
        }
        catch (error){
            reject (error); 
        }
    }); 
}

async function disConnectDB() {
    if (db) {
        client.close();
        db = null;
    } 
}

async function databaseInfo() {
    let db = await connectDB();
    const admin = client.db('timesheet').admin();
    // console.log(await admin.serverStatus());
    console.log(await admin.listDatabases());
    // await disConnectDB();
}

module.exports = {
    connectDB,
    disConnectDB,
    databaseInfo
}
