# Plantopia Frontend

E-commerce frontend para Plantopia, desarrollado con Angular 20 y Tailwind CSS 4.

## 🌿 Descripción

Frontend moderno y responsive para la tienda de plantas y productos de jardinería Plantopia. Diseñado con una paleta de colores inspirada en la naturaleza y los bosques.

## 🚀 Tecnologías

- **Angular 20** - Framework web moderno
- **Tailwind CSS 4** - Framework CSS utility-first
- **TypeScript 5.7** - Superset tipado de JavaScript
- **RxJS 7.8** - Programación reactiva
- **Angular Signals** - Gestión de estado reactiva

## 📋 Requisitos Previos

- Node.js 22.x o superior
- npm 10.x o superior
- Backend de Plantopia ejecutándose en http://localhost:3000

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

## 🏗️ Compilación

```bash
# Compilar para producción
npm run build

# Los archivos compilados estarán en dist/frontend/
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/                    # Funcionalidades centrales
│   │   ├── models/             # Interfaces y modelos
│   │   ├── services/           # Servicios globales
│   │   ├── guards/             # Guards de autenticación
│   │   └── interceptors/       # Interceptors HTTP
│   ├── shared/                 # Componentes compartidos
│   │   ├── components/         # Componentes reutilizables
│   │   └── pipes/              # Pipes personalizados
│   ├── features/               # Módulos de características
│   │   ├── home/              # Página principal
│   │   ├── products/          # Catálogo de productos
│   │   ├── product-detail/    # Detalle de producto
│   │   ├── cart/              # Carrito de compras
│   │   └── checkout/          # Proceso de compra
│   └── layout/                # Componentes de layout
│       ├── header/            # Header/Navbar
│       └── footer/            # Footer
├── environments/              # Configuraciones de entorno
└── styles.css                # Estilos globales y Tailwind
```

## 🎨 Paleta de Colores

### Colores Primarios (Forest - Verde Natural)
- `forest-50` a `forest-950` - Gama de verdes naturales

### Colores Secundarios (Earth - Tierra/Madera)
- `earth-50` a `earth-950` - Tonos tierra y madera

### Colores de Acento (Bloom - Florales)
- `bloom-50` a `bloom-950` - Tonos florales

### Colores Neutros (Stone)
- `stone-50` a `stone-950` - Tonos neutros naturales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
