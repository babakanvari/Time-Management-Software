import { MongoClient } from 'mongodb';
// const url = process.env.MONGODB_URI || `mongodb://localhost:27017/organizer`;
const url = `mongodb://localhost:27017/timesheet`; //time sheet is the name of the collection.
let db = null;

export async function connectDB(){
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    return db;
}