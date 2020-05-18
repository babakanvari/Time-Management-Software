import { connectDB } from '../connect-db'

export const findById = async (id) => {
    let db = await connectDB();
    let userInfo = await db.collection('users').findOne({ 'id': id });
    console.log(userInfo);
}

export const findNested = async (input) => {
    let db = await connectDB();
    try {
        let test = await db.collection('users').find(
            { 'id': input, },
            { timeSheet: { 'year': '2019' } }
        );
        console.log(test);
    }
    catch (error) {
        reject(error);
        console.log(error);
    }
}

export const test3 = async (input) => {
    let db = await connectDB();
    let test = await db.collection('users').find(
        { id: '23' }
    );
    while (test.hasNext()) {
        console.log(test.next());
    }
}