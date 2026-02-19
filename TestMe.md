# TestMe - DsDeviceDetection v2

This document contains instructions and examples for testing the device detection microservice.

## Local Environment Testing

1.  **Start the server**:
    ```bash
    npm run dev
    ```

## Running with Docker

### From Docker Hub (Production Image)
If you prefer not to compile the code and use the ready-to-use official image:

1.  **Download the image**:
    ```bash
    docker pull jodurpar/DsDeviceDetection:latest
    ```
2.  **Run the container**:
    ```bash
    docker run -d --name ds-device-detection -p 15230:15230 jodurpar/DsDeviceDetection:latest
    ```

### Local Compilation (Docker Compose)
If you have made changes and want to test them in a container:
1.  **Build and run**:
    ```bash
    docker-compose up --build
    ```
2.  **Open the Web UI**:
    Navigate to [http://localhost:15230](http://localhost:15230). You will see a modern interface where you can paste a User-Agent and click "Analizar Signature".

3.  **Check Swagger**:
    Navigate to [http://localhost:15230/docs](http://localhost:15230/docs) to test the endpoints interactively from the documentation.

## Testing with cURL / Postman

### Detection via GET (Query Param)
```bash
curl "http://localhost:15230/api/v1/detect?useragent=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%2017_4%20like%20Mac%20OS%20X)%20AppleWebKit/605.1.15%20(KHTML,%20like%20Gecko)%20Version/17.4%20Mobile/15E148%20Safari/604.1"
```

### Detection via POST (JSON)
```bash
curl -X POST http://localhost:15230/api/v1/detect \
     -H "Content-Type: application/json" \
     -d '{"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"}'
```

### Detection with Client Hints (Simulation)
```bash
curl http://localhost:15230/api/v1/detect \
     -H "Sec-CH-UA-Platform: Android" \
     -H "Sec-CH-UA-Platform-Version: 14" \
     -H "Sec-CH-UA-Mobile: ?1" \
     -H "Sec-CH-UA-Model: Pixel 8"
```

## Quality Testing (Automatic)

Run the unit and integration test suite to verify that the core engine is working correctly:

```bash
npm run test
```

## Expected Response Example (JSON)

```json
{
  "isBot": false,
  "device": {
    "type": "mobile",
    "brand": "iPhone",
    "model": "iPhone"
  },
  "os": {
    "name": "iOS",
    "version": "17.4"
  },
  "browser": {
    "name": "Safari",
    "version": "17.4",
    "engine": "WebKit"
  }
}
```
