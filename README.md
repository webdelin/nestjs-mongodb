# NestJs Typescript + MongoDB RESTAPI Server

## e2e Tests
yarn test:e2e

### Success
auth.e2e-spec.ts
review.e2e-spec.ts

## Debuging

### Autocannon

npm i -g autocannon
autocannon http://localhost:3000/api/review/byProduct/12d031a3-ac5c-4200-9345-fdfb86398f74


### Clinicjs

https://clinicjs.org/documentation/doctor/03-first-analysis/

npm i -g clinic

npm run buid

clinic doctor --on-port 'autocannon localhost:$PORT//api/review/byProduct/12d031a3-ac5c-4200' -- node dist/main.js


## GitHub -Actions
https://github.com/elgohr/Publish-Docker-Github-Action

## Auth GitHub
cat TOKEN.txt | docker login https://docker.pkg.github.com -u webdelin --password-stdin