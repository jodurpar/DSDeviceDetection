# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-02-19

### Total Remaster (Senior Microservice)

This version represents a complete rewrite of the original project to turn it into a modern, efficient, and decoupled microservice.

#### Added
- **Senior Architecture**: Implementation of *Strategy Pattern* and *Chain of Responsibility* for detection.
- **Data-Driven Core**: Engine based on JSON signatures (`/data/signatures.json`) loaded in memory.
- **Client Hints support**: Advanced detection for modern browsers (Sec-CH-UA-*).
- **Premium Web UI**: Minimalist interface at `/` with dark and responsive design.
- **OpenAPI 3.0**: Complete interactive documentation under Swagger UI at `/docs`.
- **Docker Multi-stage**: Optimized image based on Alpine.
- **Testing**: Test suite with Vitest for detection logic validation.
- **CONTRIBUTING.md**: Detailed guide to extending the signature system without touching code.

#### Changed
- **Runtime**: Migration to Node.js 22 LTS and TypeScript 5.
- **Modules**: Native use of ESM (ECMAScript Modules).
- **Port**: Default port changed to `15230`.
- **Framework**: Migration from Restify to Express.js for greater flexibility.

#### Removed
- Dependency on old dynamic routing systems.
- "Hardcoded" detection logic in the source code.

## [0.1.0] - 2019-02-09
### Initial Version
- Project based on Restify and Swagger JSDoc.
- First implementation of device detection.
- Initial Docker support.