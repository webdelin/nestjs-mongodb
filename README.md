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

┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬───────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max   │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼───────┤
│ Latency │ 23 ms │ 25 ms │ 41 ms │ 47 ms │ 26.24 ms │ 4.56 ms │ 62 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴───────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 339    │ 339    │ 378    │ 389    │ 373.5  │ 14.27   │ 339    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 104 kB │ 104 kB │ 116 kB │ 119 kB │ 114 kB │ 4.37 kB │ 104 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

### Clinicjs

https://clinicjs.org/documentation/doctor/03-first-analysis/

npm i -g clinic

npm run buid

clinic doctor --on-port 'autocannon localhost:$PORT//api/review/byProduct/12d031a3-ac5c-4200' -- node dist/main.js


## GitHub -Actions
https://github.com/elgohr/Publish-Docker-Github-Action