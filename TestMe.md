# TestMe - DsDeviceDetection v2

Este documento contiene instrucciones y ejemplos para probar el microservicio de detección de dispositivos.

## Pruebas en Entorno Local

1.  **Iniciar el servidor**:
    ```bash
    npm run dev
    ```

## Ejecución con Docker

### Desde Docker Hub (Imagen de Producción)
Si prefieres no compilar el código y usar la imagen oficial lista para usar:

1.  **Descargar la imagen**:
    ```bash
    docker pull jodurpar/DsDeviceDetection:latest
    ```
2.  **Ejecutar el contenedor**:
    ```bash
    docker run -d --name ds-device-detection -p 15230:15230 jodurpar/DsDeviceDetection:latest
    ```

### Compilación Local (Docker Compose)
Si has realizado cambios y quieres probarlos en un contenedor:
```bash
docker-compose up --build
```
2.  **Abrir la Web UI**:
    Navega a [http://localhost:15230](http://localhost:15230). Verás una interfaz moderna donde puedes pegar un User-Agent y pulsar "Analizar Signature".

3.  **Consultar Swagger**:
    Navega a [http://localhost:15230/docs](http://localhost:15230/docs) para probar los endpoints interactivamente desde la documentación.

## Pruebas con cURL / Postman

### Detección mediante GET (Query Param)
```bash
curl "http://localhost:15230/api/v1/detect?useragent=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%2017_4%20like%20Mac%20OS%20X)%20AppleWebKit/605.1.15%20(KHTML,%20like%20Gecko)%20Version/17.4%20Mobile/15E148%20Safari/604.1"
```

### Detección mediante POST (JSON)
```bash
curl -X POST http://localhost:15230/api/v1/detect \
     -H "Content-Type: application/json" \
     -d '{"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"}'
```

### Detección con Client Hints (Simulación)
```bash
curl http://localhost:15230/api/v1/detect \
     -H "Sec-CH-UA-Platform: Android" \
     -H "Sec-CH-UA-Platform-Version: 14" \
     -H "Sec-CH-UA-Mobile: ?1" \
     -H "Sec-CH-UA-Model: Pixel 8"
```

## Pruebas de Calidad (Automáticas)

Ejecuta la suite de tests unitarios e integración para verificar que el núcleo del motor funciona correctamente:

```bash
npm run test
```

## Ejemplo de Respuesta Esperada (JSON)

```json
{
  "isBot": false,
  "device": {
    "type": "mobile",
    "brand": "unknown",
    "model": "iPhone"
  },
  "os": {
    "name": "iOS",
    "version": "17.4"
  },
  "browser": {
    "name": "Safari",
    "version": "17.4",
    "engine": "unknown"
  }
}
```
