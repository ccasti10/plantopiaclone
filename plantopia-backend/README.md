# Plantopia Backend API

API REST para el e-commerce Plantopia, desarrollada con NestJS.

## 🌿 Descripción

Backend completo para la gestión de un e-commerce de plantas y productos de jardinería. Incluye módulos para productos, plantas, usuarios, órdenes de compra, y más.

## 🚀 Tecnologías

- **NestJS 11** - Framework progresivo de Node.js
- **TypeScript 5.7** - JavaScript con tipos estáticos
- **Swagger/OpenAPI** - Documentación automática de API
- **Class Validator** - Validación de DTOs
- **RxJS 7.8** - Programación reactiva

## 📦 Módulos Implementados

### Productos y Plantas
- **productos** - Gestión de productos base
- **plantas** - Catálogo de plantas con características específicas
- **fertilizantes** - Productos fertilizantes
- **sustratos** - Tipos de sustratos
- **maceteros** - Catálogo de maceteros
- **control-plagas** - Productos para control de plagas
- **planta-cuidados** - Guías de cuidado de plantas

### Gestión Comercial
- **ventas** - Gestión de ventas
- **orden-compras** - Órdenes de compra
- **detalle-orden-compras** - Detalles de órdenes
- **despachos** - Gestión de despachos

### Administración
- **usuarios** - Gestión de usuarios y autenticación
- **equipo** - Gestión del equipo de trabajo
- **comunes** - Recursos compartidos

## 📋 Requisitos Previos

- Node.js 22.x o superior
- npm 10.x o superior

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.develop .env
```

## 💻 Desarrollo

```bash
# Modo desarrollo con hot-reload
npm run start:dev

# La API estará disponible en http://localhost:3000
```

## 📚 Documentación API

Una vez iniciado el servidor, la documentación Swagger estará disponible en:

```
http://localhost:3000/api
```

## 🏗️ Compilación

```bash
# Compilar para producción
npm run build

# Los archivos compilados estarán en dist/
```

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

## 📁 Estructura del Proyecto

```
src/
├── comunes/              # Recursos compartidos
├── control-plagas/       # Módulo control de plagas
├── despachos/           # Módulo despachos
├── detalle-orden-compras/ # Detalles de órdenes
├── equipo/              # Módulo equipo
├── fertilizantes/       # Módulo fertilizantes
├── maceteros/           # Módulo maceteros
├── orden-compras/       # Módulo órdenes de compra
├── planta-cuidados/     # Guías de cuidado
├── plantas/             # Módulo plantas
├── productos/           # Módulo productos base
├── sustratos/           # Módulo sustratos
├── usuarios/            # Módulo usuarios
├── ventas/              # Módulo ventas
├── app.module.ts        # Módulo principal
└── main.ts              # Punto de entrada
```

## 🔌 Endpoints Principales

### Productos
- `GET /productos` - Obtener todos los productos
- `GET /productos/:id` - Obtener producto por ID
- `POST /productos` - Crear nuevo producto
- `PUT /productos/:id` - Actualizar producto
- `DELETE /productos/:id` - Eliminar producto

### Plantas
- `GET /plantas` - Obtener todas las plantas
- `GET /plantas/:id` - Obtener planta por ID
- `POST /plantas` - Crear nueva planta
- `PUT /plantas/:id` - Actualizar planta
- `DELETE /plantas/:id` - Eliminar planta

### Usuarios
- `POST /usuarios/registro` - Registrar nuevo usuario
- `POST /usuarios/login` - Iniciar sesión
- `GET /usuarios/:id` - Obtener usuario por ID

### Órdenes
- `GET /orden-compras` - Obtener todas las órdenes
- `GET /orden-compras/:id` - Obtener orden por ID
- `POST /orden-compras` - Crear nueva orden
- `PUT /orden-compras/:id` - Actualizar orden

## 🌍 Variables de Entorno

```env
# .env.develop
PORT=3000
DATABASE_URL=...
JWT_SECRET=...
```

```env
# .env.productivo
PORT=3000
DATABASE_URL=...
JWT_SECRET=...
```

## 🚀 Despliegue

El proyecto está preparado para despliegue en Koyeb:

```bash
# URL de producción
https://plantopia.koyeb.app
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
