import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json("Token required");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json("Invalid token");
    req.user = decoded;
    next();
  });
}
