require('dotenv').config(); // <-- cargar variables de entorno temprano
const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // opcional: quita el warning deprecación

const dbConnection = async() => {
    try {
        const uri = process.env.MONGODB_CNN;
        if (!uri) {
            throw new Error('MONGODB_CNN no definida en .env');
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos online');

        const { seedInitialData } = require('./seed/seed');
        await seedInitialData();

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD - ver logs');
    }
}

module.exports = { dbConnection };