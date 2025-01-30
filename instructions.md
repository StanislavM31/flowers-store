endpoints

[text](http://localhost:3000/api/flowers)
[text](http://localhost:3000/api/flowers/first)
[text](http://localhost:3000/api/flowers/item?itemNumber=2)
[text](http://localhost:3000/api/flowers/auth)
[text](http://localhost:3000/api/flowers/auth-item?item=2)
[text](http://localhost:3000/api/flowers?pageNumber=1)
[text](http://localhost:3000/api/flowers/auth-item?item=2)

для nodemon yarn start:dev:nodemon || yarn start ;

Request -> Middleware -> Guards -> Pipes -> Controller -> Interceptors -> Response

yarn add prisma
yarn prisma init
*edit .env
yarn prisma db pull (if no bd error-its ok)
yarn prisma generate клиентский код на основе схемы данных
yarn prisma db push (база готова)
create file prisma.service.ts

yarn add @nestjs/config