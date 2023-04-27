export default function handler(req, res){
    if(req.method === 'GET')
        return res.status(200).json('읽기완료')
    else if(req.method === 'POST')
        return res.status(200).json('작성완료')
}