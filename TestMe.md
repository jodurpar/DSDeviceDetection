# DSDeviceDetectApi


## Test Examples

## Run in local
 - Enter in command prompt.
 - Navigate to api src folder and then run "node app"

## Run in docker
 - Enter in command prompt.
 - Navigate to api home folder / src and then run webpack
 - Navigate  to api home folder / dist and then run "docker build -t dsdevicedetect . --no-cache" to build api image
 - Run "docker run -d --name dsdevicedetect -p 51235:51235 dsdevidedetect:dsdevicedetect" 
 - or use kitematic to run mongo image and dsdevicedetect image created before.

## Get docker image
 - There are a running docker image in hub.docker.com
   - docker pull jodurpar/dsdevicedetect
 - Run "docker run -d --name dsdevicedetect -p 51235:51235 dsdevidedetect:dsdevicedetect" 
 - or use kitematic to run mongo image and dsdevicedetect image created before.

### Testing in a browser
    
- Go to your browser and navigate to http://localhost:51235/Swagger . If all are ok, you will see this screen:
 
![Swagger Screen](https://github.com/jodurpar/DSDeviveDetectApi/blob/master/BrowserSwagger.PNG)

### Testing in Postman

- __Run Postman__ 
- __For DeviceDetect, select GET verb and enter__
   ```javascript
   localhost:51235
   ```
    Add useragent param: 
    ```javascript
        useragent: Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1
    ```
   - In the response body can recieve this JSON object
   ```javascript
        {
        "deviceInfo":
            {
            "userAgent": "Mozilla/5.0 (Linux; Android 9; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Mobile Safari/537.36\",
            "os":"Android",
            "browser":"Chrome",
            "device":"Android",
            "os_version":"unknown",
            "browser_version":"72.0.3626.96"},
            "isMobile":true,
            "isDesktop":false,
            "isTablet":false
            }
   ```
   - If there are any error, you may recieve the HTTP error. The "1.0.0" literal is de last versión of this api.




## Use the api from your code 

    You need an http client to access to the api.

### Angular Typescript code
#### Get DeviceDetect, you can see the swagger example to reply
##### You need add in params the user agent!
 
   ```javascript
        import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

        export class HttpclientService {

        constructor(public http: HttpClient) {
            }

        public deviceDetect<T>( myParams : HttpParams = undefined) : Promise<T> {

        let url = 'localhost:51235';

        let promise = new Promise<T>((resolve, reject) => {

        try {

            let myheaders = new HttpHeaders();
            myheaders.set("client-authorization", "Myapp");
            myheaders = myheaders.append("client-authentication", "app");
            myheaders = myheaders.append("accept-version", "1.0.0");

            this.http.get(url, { headers: myheaders , params : myParams})
                .toPromise()
                .then(response => {
                resolve(response as T);
            } )
        } catch (e) {
        reject([]);
        }
        });
        return promise;
       }
    }
   ```

### C# Code (same to all .NET)


### Author

**José Durán Pareja**

* [github/jodurpar](https://github.com/jodurpar)

### License

Copyright © 2019 [José Durán Pareja](https://github.com/jodurpar).
Released under the [MIT License](./mitLicense.md).

