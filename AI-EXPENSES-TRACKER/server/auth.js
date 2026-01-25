import jwt from "jsonwebtoken";

export default function auth(req, res, next){
    const token = req.headers.authorization;
    if(!token) return res.sendstatus(401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userid = decoded.id;
    next();
}