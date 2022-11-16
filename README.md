# proyecto-prueba

## Instalación local
npm install

## Ejecución local
npm start

## Ejecución local en modo desarrollo
npm run develop

## Ejecución build docker
docker build -t node-prueba-api .

## Ejecución docker iterativo
docker run -it -p 4000:3005 node-prueba-api

## Ejecución docker segundo plano
docker run -d -p 4000:3005 node-prueba-api

