# DSDeviceDetectApi

## What ?

-    This api is a fast way to detect the device from one user agent.
-    Deploy in a docker container or as node app and you can use it.

## Install

### In command prompt

- Clone this project
- Run npm install
- Compile Typescript
- Run node app.js

### In a Webpack

- run webpack in the src folder command prompt. This make a /dist folder with DsDeviceDetect.js file.

### In a Docker container.

- There are a docker and a docker-compose files in the dist folder. Run docker build to make a docker image. 

#### Get docker image
 - There are a running docker image in hub.docker.com
   - docker pull jodurpar/dsdevicedetect
 - Run "docker run -d --name dsdevicedetect -p 51235:51235 dsdevidedetect" 
 - or use kitematic to run mongo image and dsdevicedetect image created before.


## Uninstall

- Remove solution.
- Remode docker container and images.

## Usage

- Run "node app.js" in to cloned directory once typescript are compiled.
- The api was configurate to run in localhost:51235, but can be changed editing  the file ./apiData.json

- If you want to build another break version (example another 2.0.0 version) simple copy and paste V1 to V2 folder and change all the references from V1 to V2 inside the files in the V2 folder.
  > Also you need to add all api200 references where api100 references are used. This version only take care of the first number, because only mayor released are used.  
  > 


## Test Examples

* [TestExamples](https://github.com/jodurpar/DSDeviceDetection/blob/master/TestMe.md)

### Author

**José Durán Pareja**

* [github/jodurpar](https://github.com/jodurpar)

### Credits

The api is inspired by and based on the work from ng-device-detector. 
Also used a typescript wrapper of the amazing work in ReTree for regex based 
needs.

Parts of this code are bases in the excelent work of 
* [github/AhsanAyaz](https://github.com/AhsanAyaz)

### License

Copyright © 2019/2020 [José Durán Pareja](https://github.com/jodurpar).
Released under the [MIT License](./mitLicense.md).

