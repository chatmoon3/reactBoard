import { connectDB } from "@/util/database"

export default async function handler(req, res){
    if (req.method === 'POST'){
        const db = (await connectDB).db('board')
        db.collection('post').insertOne(req.body, (err, res)=>{
            if(err) throw err;
            db.close();
        })
        return res.redirect(302, '/list')
    }
}