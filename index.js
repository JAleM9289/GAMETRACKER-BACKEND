const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 

// --- 1. Configuraciones
dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3001; 

// --- 2. Importaciones de Rutas (¡CORREGIDO con los nuevos nombres de archivo!)
// Ahora buscamos 'juegos' y 'resenas', que coinciden con los nuevos nombres
const juegosRouter = require('./routes/juegos'); 
const resenasRouter = require('./routes/resenas');

// --- 3. Middlewares
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

// --- 4. Definición de Rutas (Endpoints)
// La URL base sigue siendo /api/juegos y /api/resenas
app.use('/api/juegos', juegosRouter);
app.use('/api/resenas', resenasRouter);

// Ruta Raíz
app.get('/', (req, res) => {
    res.send('Gametracker está funcionando con éxito');
});

// --- 5. Conexión a la Base de Datos
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('Conectado exitosamente a MongoDB Atlas'); // ¡Ya habíamos llegado aquí!

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error al conectar a MongoDB:", error.message);
        process.exit(1); 
    });

module.exports = app;