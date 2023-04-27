import { connectDB } from "@/util/database"

export default async function handler(req, res){
    if(req.method === 'GET'){
        const db = (await connectDB).db('board')
        let result = await db.collection('post').find().toArray()
        return res.status(400).json(result)
    }
    else{
        return res.status(400).json('실패')
    }
}