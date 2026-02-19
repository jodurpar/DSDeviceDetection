# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [2.0.0] - 2026-02-19

### Remasterización Total (Microservicio Senior)

Esta versión supone una reescritura completa del proyecto original para convertirlo en un microservicio moderno, eficiente y desacoplado.

#### Añadido
- **Arquitectura Senior**: Implementación de *Strategy Pattern* y *Chain of Responsibility* para la detección.
- **Data-Driven Core**: Motor basado en firmas JSON (`/data/signatures.json`) cargadas en memoria.
- **Client Hints support**: Detección avanzada para navegadores modernos (Sec-CH-UA-*).
- **Web UI Premium**: Interfaz minimalista en `/` con diseño oscuro y responsive.
- **OpenAPI 3.0**: Documentación interactiva completa bajo Swagger UI en `/docs`.
- **Docker Multi-stage**: Imagen optimizada basada en Alpine.
- **Testing**: Suite de pruebas con Vitest para validación de lógica de detección.
- **CONTRIBUTING.md**: Guía detallada para extender el sistema de firmas sin tocar código.

#### Cambiado
- **Runtime**: Migración a Node.js 22 LTS y TypeScript 5.
- **Módulos**: Uso nativo de ESM (ECMAScript Modules).
- **Puerto**: Puerto predeterminado cambiado a `15230`.
- **Framework**: Migración de Restify a Express.js para mayor flexibilidad.

#### Eliminado
- Dependencia de sistemas antiguos de enrutamiento dinámico.
- Lógica de detección "hardcoded" en el código fuente.

## [0.1.0] - 2019-02-09
### Versión Inicial
- Proyecto basado en Restify y Swagger JSDoc.
- Primera implementación de detección de dispositivos.
- Soporte inicial para Docker.