# Microservicios GamerHub - Carlos Gael Castro Trujillo

Sistema de microservicios para gestión de videojuegos desarrollado con Docker, Node.js, Vanilla JS y MySQL.  
Permite agregar, listar y administrar videojuegos con sus características principales.

## 📋 Tabla de Contenidos
- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints API](#endpoints-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Pruebas de Persistencia](#pruebas-de-persistencia)

## 🏗 Arquitectura

El sistema está compuesto por tres servicios principales:

┌─────────────────────────────────────────────────────────────┐
│                     ARQUITECTURA DE MICROSERVICIOS           │
└─────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │   FRONTEND      │ Puerto 3000
    │   Vanilla JS    │ (gamerhub-frontend)
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │   API SERVICE   │ Puerto 5000
    │   Node.js       │ (gamerhub-api)
    └─────────────────┘
             │
             ▼
    ┌─────────────────┐
    │  DATABASE       │ Puerto 3306
    │  MySQL          │ (gamerhub-db)
    └─────────────────┘

## 🛠 Tecnologías
- **Frontend:** Vanilla JS, HTML5, CSS3, Font Awesome
- **Backend:** Node.js, Express.js
- **Base de datos:** MySQL
- **Contenedores:** Docker y Docker Compose
- **API Testing:** Postman

## ✅ Requisitos Previos
- Node.js >= 18
- Docker y Docker Compose
- npm
- MySQL (opcional si se usa Docker)

## 💻 Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/gamerhub.git
   cd gamerhub
🔗 Endpoints API

GET /api/videojuegos → Listar todos los videojuegos

POST /api/videojuegos → Crear un nuevo videojuego

GET /api/videojuegos/:id → Obtener un videojuego por ID

PUT /api/videojuegos/:id → Actualizar un videojuego

DELETE /api/videojuegos/:id → Eliminar un videojuego

GET /api/CastroTrujillo → Obtener información del usuario (ejemplo)

ESTRUCTURA DEL PROYECTO

gamerhub/
├─ gamerhub-frontend/       # Vanilla JS frontend
├─ gamerhub-api/            # Node.js API
├─ docker-compose.yml       # Configuración de contenedores
└─ README.md
