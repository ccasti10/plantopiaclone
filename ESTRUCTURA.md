# Estructura del Proyecto Plantopia

Este repositorio contiene tanto el backend como el frontend de Plantopia e-commerce.

## 📁 Estructura de Carpetas

```
plantopiaclone/
├── src/                      # Backend NestJS
│   ├── comunes/             # Middlewares, filters, pipes
│   ├── control-plagas/      # Módulo control de plagas
│   ├── despachos/           # Módulo despachos
│   ├── detalle-orden-compras/
│   ├── equipo/              # Módulo equipos
│   ├── fertilizantes/       # Módulo fertilizantes
│   ├── maceteros/           # Módulo maceteros
│   ├── orden-compras/       # Módulo órdenes de compra
│   ├── planta-cuidados/     # Módulo cuidados de plantas
│   ├── plantas/             # Módulo plantas
│   ├── productos/           # Módulo productos
│   ├── sustratos/           # Módulo sustratos
│   ├── usuarios/            # Módulo usuarios
│   ├── ventas/              # Módulo ventas
│   └── main.ts              # Punto de entrada del backend
│
├── plantopia-frontend/      # Frontend Angular 20
│   ├── src/                 # Código fuente Angular
│   │   ├── app/            
│   │   │   ├── core/       # Servicios y modelos
│   │   │   ├── features/   # Páginas principales
│   │   │   ├── layout/     # Header y Footer
│   │   │   └── shared/     # Componentes compartidos
│   │   ├── environments/   # Configuraciones de entorno
│   │   └── styles.css      # Estilos globales + Tailwind
│   ├── package.json
│   └── README.md           # Documentación del frontend
│
├── test/                    # Tests del backend
├── package.json             # Dependencias del backend
└── README.md                # Documentación general
```

## 🌳 Ramas del Repositorio

### Backend
- `claude/update-packages-JryPB` - Rama principal con backend actualizado
  - NestJS 11
  - TypeScript 5.7
  - Todas las dependencias actualizadas

### Frontend
- `claude/frontend-plantopia-JryPB` - Rama específica para frontend
  - Angular 20
  - Tailwind CSS 4
  - Diseño responsive completo

## 🚀 Cómo Ejecutar

### Backend (Puerto 3000)
```bash
# Desde la raíz del proyecto
npm install
npm run start:dev
```

El backend estará disponible en: http://localhost:3000
Swagger API docs: http://localhost:3000/api

### Frontend (Puerto 4200)
```bash
# Desde la carpeta plantopia-frontend
cd plantopia-frontend
npm install
npm start
```

El frontend estará disponible en: http://localhost:4200

## 📦 Tecnologías

### Backend
- NestJS 11.1.12
- TypeScript 5.7.3
- Swagger/OpenAPI
- Class Validator & Transformer

### Frontend
- Angular 20.3.14
- Tailwind CSS 4
- TypeScript 5.7.3
- RxJS 7.8.2
- Angular Signals

## 🔗 Integración

El frontend se conecta al backend a través de:
- API Base URL: `http://localhost:3000`
- Servicios HTTP configurados en `plantopia-frontend/src/app/core/services/`

## 📝 Notas

- El backend incluye Swagger para documentación de API
- El frontend utiliza localStorage para persistencia del carrito
- Ambos proyectos están configurados con ESLint y Prettier
- El diseño del frontend utiliza una paleta de colores temática de plantas/bosques

## 👥 Equipo

- Christian Castillo (cnicolascastillop@gmail.com)
- Rodrigo Cabello (roancamo@gmail.com)
- Camilo Orellana (orellanasolec@gmail.com)
