import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { DB, sequelize } from './config/db.js';
import apiRoute from './routes/api.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://sa-cantina.vercel.app',  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],  
  credentials: true,  
}));
app.options('*', cors());

app.use('/api', apiRoute);

(async () => {
  await DB();
  await sequelize.sync(); 
  console.log("✅ Base de datos sincronizada");
})();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});