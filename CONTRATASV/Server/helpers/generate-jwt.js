const jwt = require('jsonwebtoken');

if (!process.env.SECRETORPRIVATEKEY) {
    throw new Error('SECRETORPRIVATEKEY no definida en .env');
}

const generateJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                return reject('No se pudo generar el token');
            }
            resolve(token);
        });
    } );
}

module.exports = { generateJWT };