---
id: categorias
title: Categorías
sidebar_position: 4
---

# Categorías

Archivo: `controllers/Categorias/categorias.controller.js`  
Rutas: `routes/categorias/categorias.routes.js`

## Endpoints

```http
GET    /api/categorias
GET    /api/categorias/:id
POST   /api/categorias
PUT    /api/categorias/:id
DELETE /api/categorias/:id
```

## Crear categoría

```http
POST /api/categorias
```

```json
{
  "nombre_categoria": "Ropa Deportiva",
  "descripcion": "Prendas para deporte y actividad física"
}
```

Se crea con `estado = 'activo'` automáticamente.

## Editar categoría

```http
PUT /api/categorias/:id
```

```json
{
  "nombre_categoria": "Ropa Deportiva",
  "descripcion": "Descripción actualizada",
  "estado": "inactivo"
}
```

## Validaciones

| Campo | Reglas |
|---|---|
| `nombre_categoria` | Obligatorio, solo letras (con tildes), máximo 100 caracteres, único en el sistema |
| `descripcion` | Obligatoria, máximo 255 caracteres |
| `estado` | `activo` o `inactivo` (solo en edición) |

En edición verifica que no exista **otra** categoría con el mismo nombre (distinta al ID actual).

:::note
El código de eliminación tiene comentada la verificación de productos asociados. Actualmente permite eliminar una categoría aunque tenga productos, gracias al `ON DELETE CASCADE` de la tabla `producto_categoria`.
:::
