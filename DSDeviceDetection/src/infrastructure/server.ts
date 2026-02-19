import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger.js';
import { apiRoutes } from './routes/api.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createServer = () => {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../../public')));

    // Swagger docs
    const specs = swaggerJsdoc(swaggerOptions);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

    // Routes
    app.use('/api/v1', apiRoutes);

    // Health check
    app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));

    return app;
};
