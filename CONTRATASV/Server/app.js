require('dotenv').config();

const Server = require('./models/server');
const express = require('express');
const cors = require('cors');

const server = new Server();
const app = express();

// Body parser — asegúrate de que esté antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Logger de peticiones (temporal)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} -> ${req.method} ${req.originalUrl} - Host: ${req.headers.host} - Auth: ${req.headers.authorization || 'none'}`);
  next();
});

// Middleware global de manejo de errores (temporal para DEV)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (process.env.NODE_ENV !== 'production') {
    return res.status(err.status || 500).json({
      ok: false,
      msg: err.message || 'Internal Server Error',
      stack: err.stack
    });
  }
  res.status(err.status || 500).json({ ok: false, msg: 'Internal Server Error' });
});

server.listen();
