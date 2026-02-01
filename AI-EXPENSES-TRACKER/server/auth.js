/* eslint-env node */
import jwt from "jsonwebtoken";

export default function auth(req, res, next){
    const token = req.headers.authorization;
    if(!token) return res.sendStatus(401);

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userid = decoded.id;
        next();
    }catch {
        return res.sendStatus(403);
    }
}
