const jwt = require('jsonwebtoken');

module.exports = {
    validToken: (req, res, next) => {
        const token = req.header('authtoken')
        if (!token) res.status(401).send('Acceso denegado.');
        
        try {
            const verified = jwt.verify(token, process.env.SECRET_KEY);
            req.user = verified;
            next();
        } catch (error) {
            res.status(400).send('Token inválido.');
        }
    }
}