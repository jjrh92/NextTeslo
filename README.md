# NextTeslo
Proyecto final curso NextJS

## Correr en DEV
1. Clonar el repo
2. Crear una copia del archivo ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Limpiar el localStorage del navegador.
8. Correr el proyecto ```npm run dev```