# DSDeviceDetection


-    This is one of my api/microservice projects in Typescript. 
-    I'm write code for many years and, although one day I was good at writing, now, over the years, I am comfortable detecting needs and proposing solutions to common problems, in computer science or in life itself.
-    In this set of apis, I have not paid too much attention to the details. There are many and very good professionals who will, surely, much better than me.
-    My intention, always has been, is to create a prototype with a simple idea that allows others to develop it. Something similar to a proof of concept.
-    This is the first of a series of projects that I will put in gitgub at everyone's disposal:

     - Mongo's api
     - Translations api
     - SqlServer api
     - MySql API

And finally, in this first phase, Charly's Api.
Throughout these months, I will go up and complete some of them.

Some of this code are experimental. I enjoy to learn new techniques and concepts for me trying to understand 
what is done in each of the phases so I can explain it later with an example. This is the case of this api.

I know, I know. Comments are missing lack of documentation, the api is not complete ... 
This is deliberate because I do not intend to make a finished commercial product. This is a template that serves as a base 
and learning to those who, like me, want to start working with nodejs / typescript projects.

## Install

### In command prompt

- Clone this project
- Run npm install
- Compile Typescript
- Run node app.js

### In visual studio 2019

- Clone this project
- To run and debug in visual studio environments, remove "outDir" line of "compilerOptions" element in tsconfig.json file.
- Type F5 or start debugging


### Webpack

- Add "outDir" to tsconfig.json at "compilerOptions" element.   
   ```javascript
    "outDir": "./dist",
   ```
- Run webpack in the dist folder command prompt. This make a /dist folder with DsDeviceDetect.js file.
- At command prompt: webpack --config=webpack.config.js

### Docker container.

- There are a docker file in the root folder. Run docker build to make a docker image. 
- Build docker image: docker build -t dsdevicedetect:latest .
- Create container either portainer, kitematic or another docker tool
- Run container

## Uninstall

- Remove solution.
- Remode docker container and images.

## Usage

- Run swagger from this api
  - localhost:51235
- Enter your user agent.