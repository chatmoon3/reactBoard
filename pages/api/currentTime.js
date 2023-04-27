export default function handler(req, res){
    let today = new Date()
    return res.status(200).json(today.toLocaleString())
}