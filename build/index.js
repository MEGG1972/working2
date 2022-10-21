import express from 'express';
import { PORT } from './env.js';
import { router } from './rutes/routes';
import path from 'path';
const app = express();
const staticPath = path.join(__dirname, '..', 'public');
app.use(express.static(staticPath));
app.use("/", router);
app.listen(PORT, () => { console.log('Escucha en el puerto ${PORT}'); });
