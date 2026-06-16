---
id: estructura
title: Estructura del proyecto
sidebar_position: 3
---

# Estructura del proyecto

```
ModaMagica/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js           # Conexión PostgreSQL con pg.Pool
│   │   │   └── upload.js       # Configuración Multer
│   │   ├── controllers/
│   │   │   ├── Auth/
│   │   │   │   ├── authController.js
│   │   │   │   └── recoveryController.js
│   │   │   ├── Categorias/
│   │   │   │   └── categorias.controller.js
│   │   │   ├── Descuentos/
│   │   │   │   └── descuentos.controller.js
│   │   │   ├── Pedidos/
│   │   │   │   └── pedidos.controller.js
│   │   │   ├── Productos/
│   │   │   │   ├── colores.controller.js
│   │   │   │   ├── imagenes.controller.js
│   │   │   │   ├── productos.controller.js
│   │   │   │   └── tallas.controller.js
│   │   │   └── Usuarios/
│   │   │       └── usuarios.controllers.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   └── routes/
│   │       ├── Auth/
│   │       │   ├── authRoutes.js
│   │       │   └── recoveryRoutes.js
│   │       ├── categorias/
│   │       │   └── categorias.routes.js
│   │       ├── Descuentos/
│   │       │   └── descuentos.routes.js
│   │       ├── Pedidos/
│   │       │   └── pedidos.routes.js
│   │       ├── Productos/
│   │       │   ├── colores.routes.js
│   │       │   ├── imagenes.routes.js
│   │       │   ├── productos.routes.js
│   │       │   └── tallas.routes.js
│   │       └── Usuarios/
│   │           └── usuarios.routes.js
│   ├── uploads/productos/      # Imágenes subidas
│   ├── app.js                  # Entrada principal
│   ├── .env
│   └── package.json
│
├── Cliente/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   └── ConfirmModal.jsx
│   │   ├── pages/
│   │   │   ├── categorias/
│   │   │   │   ├── Categorias.jsx
│   │   │   │   └── Categorias.css
│   │   │   ├── Dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── descuentos/
│   │   │   │   ├── Descuentos.jsx
│   │   │   │   └── Descuentos.css
│   │   │   ├── login/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Login.css
│   │   │   ├── miPerfil/
│   │   │   │   ├── MiPerfil.jsx
│   │   │   │   └── MiPerfil.css
│   │   │   ├── pedidos/
│   │   │   │   ├── Pedidos.jsx
│   │   │   │   └── Pedidos.css
│   │   │   ├── productos/
│   │   │   │   ├── Productos.jsx
│   │   │   │   └── Productos.css
│   │   │   ├── recuperarContrasena/
│   │   │   │   ├── RecuperarContrasena.jsx
│   │   │   │   └── RecuperarContrasena.css
│   │   │   └── tienda/
│   │   │       ├── Tienda.jsx
│   │   │       ├── Tienda.css
│   │   │       ├── TiendaAuth.jsx
│   │   │       └── TiendaAuth.css
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.html
│   └── package.json
│
├── .gitignore
└── ModaMagica.sql
```
