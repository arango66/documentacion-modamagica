---
id: overview
title: Backend — Resumen
sidebar_position: 1
---

# Backend

API REST con **Node.js + Express** conectada a **PostgreSQL** vía `pg.Pool`.

## URL base

```
http://localhost:3000/api
```

## Rutas registradas en `app.js`

| Prefijo | Archivo de rutas |
|---|---|
| `/api/auth` | `routes/Auth/authRoutes.js` |
| `/api/recovery` | `routes/Auth/recoveryRoutes.js` |
| `/api/usuarios` | `routes/Usuarios/usuarios.routes.js` |
| `/api/categorias` | `routes/categorias/categorias.routes.js` |
| `/api/productos` | `routes/Productos/productos.routes.js` |
| `/api/colores` | `routes/Productos/colores.routes.js` |
| `/api/tallas` | `routes/Productos/tallas.routes.js` |
| `/api/imagenes` | `routes/Productos/imagenes.routes.js` |
| `/api/descuentos` | `routes/Descuentos/descuentos.routes.js` |
| `/api/pedidos` | `routes/Pedidos/pedidos.routes.js` |

## Archivos estáticos

Las imágenes subidas se sirven en:
```
http://localhost:3000/uploads/productos/<nombre_archivo>
```

## CORS

Orígenes permitidos:
- `http://localhost:5173`
- `http://localhost:5174`

## Conexión a la base de datos (`config/db.js`)

```js
const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
```

## Subida de imágenes (`config/upload.js`)

- Carpeta destino: `uploads/productos/`
- Formatos permitidos: `jpg`, `jpeg`, `png`, `webp`
- Nombre generado: `producto_<timestamp>.<ext>`
