# DsDeviceDetection Microservice v2 (Remastered)

Servicio de detección de dispositivos de alto rendimiento, autónomo y extensible, construido con **Node.js**, **TypeScript** y **Express**. 

Esta versión 2.0 ha sido rediseñada desde cero siguiendo principios **SOLID**, **Clean Code** y una arquitectura **Data-Driven** (orientada a datos), lo que permite su escalabilidad sin modificar el núcleo del softwarecore.

## Características

- **Arquitectura**: Implementación mediante *Strategy Pattern* y *Chain of Responsibility*.
- **Data-Driven**: Detección basada en firmas JSON cargadas en memoria (Ultra-fast).
- **Client Hints support**: Soporta los estándares más recientes de Google (Sec-CH-UA-*).
- **Zero-DB**: No requiere bases de datos externas; todo funciona en el contenedor.
- **Web UI**: Dashboard minimalista integrado para pruebas rápidas.
- **OpenAPI 3.0**: Documentación interactiva completa con Swagger UI.
- **Docker Ready**: Imagen multi-stage optimizada basada en Alpine.

## Instalación y Despliegue

### Con Docker (Recomendado)
```bash
docker-compose up --build
```
La API estará disponible en `http://localhost:15230`.

### Desarrollo Local
1. Instalar dependencias: `npm install`
2. Iniciar modo dev: `npm run dev`
3. Construir para producción: `npm run build`
4. Iniciar producción: `npm start`

## Uso

### Endpoints Principales
- **GET/POST `/api/v1/detect`**: Detecta el dispositivo.
    - Puedes enviar el `useragent` como query param o en los headers estándar.
    - Soporta headers de *Client Hints* para mayor precisión en versiones modernas de Chrome/Edge.
- **Página Web `/`**: Interfaz visual para análisis manual.
- **Documentación `/docs`**: Swagger UI con el contrato OpenAPI.

## Contribuciones

Este proyecto crece gracias a su comunidad. Si encuentras un dispositivo, sistema operativo o navegador que no se detecta correctamente, puedes añadirlo fácilmente editando el archivo de firmas.

Consulta la **[Guía de Contribución](./CONTRIBUTING.md)** para aprender cómo añadir nuevas firmas en segundos.

## Licencia y Avisos Legales

Copyright © 2026 José Durán Pareja.
Lanzado bajo la [Licencia MIT](./mitLicense.md).

**AVISO IMPORTANTE**: Este software se entrega "tal cual". La precisión de la detección depende de las firmas de datos. Para más detalles sobre atribución y descargos de responsabilidad, consulta el archivo **[NOTICE](./NOTICE.md)**.
