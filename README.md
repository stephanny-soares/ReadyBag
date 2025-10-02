# ReadyBag

ReadyBag es una aplicación diseñada para **organizar, gestionar y acceder fácilmente a tus elementos personales y profesionales**. Permite llevar un control de tus recursos, planificar tareas y consultar información de manera rápida y eficiente.

## Objetivo del proyecto

El objetivo principal de ReadyBag es centralizar la gestión de objetos, información y tareas en un solo lugar, facilitando el acceso y control de manera organizada y confiable. La aplicación busca ser escalable y preparada para integrarse con un frontend moderno.

## Funcionalidades principales

- Registro y gestión de elementos personales y profesionales.  
- Acceso rápido a información almacenada.  
- API REST organizada para integrarse con futuras interfaces de usuario.  
- Sistema modular que permite agregar nuevas funcionalidades sin afectar la estructura existente.

## Estructura del proyecto

```
ReadyBag/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ routes/
│  │  ├─ models/
│  │  ├─ middlewares/
│  │  └─ utils/
│  ├─ node_modules/
│  ├─ .env
│  ├─ package.json
│  ├─ package-lock.json
│  └─ server.js
├─ frontend/
├─ .gitignore
└─ README.md

```

## Requisitos

- Node.js >= 18
- npm >= 9

## Configuración del backend

1. Entrar a la carpeta del backend:

```bash
cd backend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con las variables necesarias, por ejemplo:

```
PORT=3000
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

* Servidor en [http://localhost:3000/](http://localhost:3000/)
* Ruta health: [http://localhost:3000/api/health](http://localhost:3000/api/health)

## Colaboración

* Clonar el repositorio:

```bash
git clone git@github.com:stephanny-soares/ReadyBag.git
cd ReadyBag/backend
npm install
npm run dev
```
