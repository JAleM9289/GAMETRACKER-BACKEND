// 1. Importar Express
const express = require('express');

// 2. Crear una instancia de la aplicación
const app = express();

// 3. Definir un "puerto" para que el servidor escuche
// Usamos 3001 para el backend (React suele usar el 3000)
const PORT = 3001;

// 4. Crear una ruta de prueba
// Cuando alguien visite la raíz ('/') de tu servidor, le enviaremos una respuesta.
app.get('/', (req, res) => {
  res.send('¡Mi servidor GameTracker funciona!');
});

// 5. Iniciar el servidor
// Le decimos a la app que "escuche" peticiones en el puerto que definimos.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});