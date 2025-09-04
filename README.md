# API NodeJS + TypeScript + Sequelize

Este proyecto es una **API RESTful** construida con **Node.js**, **TypeScript**, **Express** y **Sequelize** como ORM.  
Incluye autenticación con **JWT y OAuth2**, manejo de roles y permisos, y un enrutamiento dinámico modular.

---

## 🚀 Características principales

- ✅ Node.js + TypeScript para tipado fuerte y desarrollo moderno.  
- ✅ Express como framework de servidor.  
- ✅ Sequelize como ORM para MySQL.  
- ✅ Autenticación con **JWT** y middleware `verifyToken`.  
- ✅ Rutas dinámicas (`src/routes`) con carga automática.  
- ✅ Estructura escalable para controladores, modelos y middlewares.  
- ✅ Variables de entorno con `dotenv`.  
- ✅ Soporte CORS y JSON.  

---

## 📂 Estructura del proyecto
```bash
src/
├── controllers/ # Controladores de negocio
│ ├── auth.ts
│ └── usuarios.ts
├── db/ # Configuración de Sequelize
│ └── database.ts
├── middlewares/ # Middlewares (ej. verifyToken)
│ └── auth.middleware.ts
├── models/ # Modelos generados con Sequelize
│ └── init-models.ts
├── routes/ # Rutas dinámicas
│ ├── auth.ts
│ ├── usuarios.ts
│ └── index.ts
├── app.ts # Configuración principal de Express
```
---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Juliandos/API-Nodejs-TS-Sequelize.git
cd API-Nodejs-TS-Sequelize
```
### 2. Instalar dependencias
```bash
npm install
```
### 3. Variables de entorno
Crea un archivo .env en la raíz del proyecto:
```bash
PORT=3001

DB_NAME=api_node_sequelize
DB_USER=root
DB_PASS=
DB_HOST=127.0.0.1
DB_PORT=3306

JWT_SECRET=supersecreto123
JWT_EXPIRES_IN=1h
```
### 4. Compilar y ejecutar
Desarrollo con recarga automática:
```bash
npm run dev
```
Producción:
```bash
npm run build
npm start
```
#### 🔑 Autenticación JWT
Las rutas de autenticación (/auth) están abiertas:

POST /auth/register → Crear usuario

POST /auth/login → Iniciar sesión y obtener token

POST /auth/refresh → Refrescar token

POST /auth/logout/:id → Cerrar sesión

Todas las demás rutas requieren Authorization: Bearer <token> en el header.

Ejemplo:

http
GET /usuarios
Authorization: Bearer eyJhbGciOiJIUzI1...
📌 Scripts disponibles
npm run dev → Ejecuta en modo desarrollo con nodemon + ts-node.

npm run build → Compila el código TypeScript a JavaScript.

npm start → Ejecuta el servidor en producción.

🛠️ Tecnologías usadas
Node.js

TypeScript

Express

Sequelize

MySQL

JWT

✨ Autor
👨‍💻 Julian Ortega
🔗 GitHub
