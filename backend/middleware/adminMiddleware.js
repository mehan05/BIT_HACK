export const checkAdmin = async (req, res, next) => {
   const token = req.headers.authorization.split(" ")[1];
   if (token) {
     const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
     if (decodedToken.isAdmin) {
       next();
     } else {
       res.status(401).json({ message: "Unauthorized" });
     }
   } else {
     res.status(401).json({ message: "Unauthorized" });
   }
};