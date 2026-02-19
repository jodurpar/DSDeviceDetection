# DsDeviceDetection Microservice v2 (Remastered)

A high-performance, autonomous, and extensible device detection service built with **Node.js**, **TypeScript**, and **Express**.

This version 2.0 has been redesigned from scratch following **SOLID**, **Clean Code** principles and a **Data-Driven** architecture, allowing scalability without modifying the core engine.

## Features

- **Architecture**: Implementation using *Strategy Pattern* and *Chain of Responsibility*.
- **Data-Driven**: Detection based on JSON signatures loaded in memory (Ultra-fast).
- **Client Hints support**: Supports the latest Google standards (Sec-CH-UA-*).
- **Zero-DB**: No external databases required; everything runs within the container.
- **Web UI**: Integrated minimalist dashboard for quick testing.
- **OpenAPI 3.0**: Complete interactive documentation with Swagger UI.
- **Docker Ready**: Optimized multi-stage image based on Alpine.

## Installation and Deployment

### With Docker (Recommended)
```bash
docker-compose up --build
```
The API will be available at `http://localhost:15230`.

### Local Development
1. Install dependencies: `npm install`
2. Start dev mode: `npm run dev`
3. Build for production: `npm run build`
4. Start production: `npm start`

## Usage

### Main Endpoints
- **GET/POST `/api/v1/detect`**: Detects the device.
    - You can send the `useragent` as a query param or in standard headers.
    - Supports *Client Hints* headers for better precision in modern versions of Chrome/Edge.
- **Web Page `/`**: Visual interface for manual analysis.
- **Documentation `/docs`**: Swagger UI with the OpenAPI contract.

## Contributions

This project grows thanks to its community. If you find a device, operating system, or browser that is not correctly detected, you can easily add it by editing the signatures file.

Check the **[Contribution Guide](./CONTRIBUTING.md)** to learn how to add new signatures in seconds.

## License and Legal Notices

Copyright © 2026 José Durán Pareja.
Released under the [MIT License](./mitLicense.md).

**IMPORTANT NOTICE**: This software is provided "as is". Detection accuracy depends on the data signatures. For more details on attribution and disclaimers, see the **[NOTICE](./NOTICE.md)** file.
