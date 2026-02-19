import { createServer } from './infrastructure/server.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 15230;
const app = createServer();

app.listen(port, () => {
    console.log(`🚀 DsDeviceDetection Microservice listening at http://localhost:${port}`);
    console.log(`📄 Swagger docs at http://localhost:${port}/docs`);
});
