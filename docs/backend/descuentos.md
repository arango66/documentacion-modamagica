---
id: descuentos
title: Descuentos
sidebar_position: 6
---

# Descuentos

Archivo: `controllers/Descuentos/descuentos.controller.js`  
Rutas: `routes/Descuentos/descuentos.routes.js`

## Endpoints

```http
GET    /api/descuentos
GET    /api/descuentos/:id
POST   /api/descuentos
PUT    /api/descuentos/:id
DELETE /api/descuentos/:id
GET    /api/descuentos/productos-activos
POST   /api/descuentos/aplicar
```

:::info Orden de rutas importante
`/productos-activos` y `/aplicar` están declaradas **antes** que `/:id` en el router para evitar que Express las interprete como un ID.
:::

## Obtener todos

`GET /api/descuentos` ejecuta primero `marcarVencidos()`, que actualiza automáticamente el estado a `'vencido'` de todos los descuentos cuya `fecha_cierre < CURRENT_DATE`.

## Crear descuento

```http
POST /api/descuentos
```

```json
{
  "codigo": "VERANO25",
  "descripcion": "Descuento de verano",
  "valor_descuento": 20,
  "limite_usos": 100,
  "fecha_inicio": "2026-07-01",
  "fecha_cierre": "2026-07-31",
  "prendas_ids": [3, 4, 5]
}
```

El código se guarda en **mayúsculas** automáticamente.

## Editar descuento

```http
PUT /api/descuentos/:id
```

En edición no se puede cambiar el código. Si `fecha_cierre` ya pasó, el estado se fuerza a `'vencido'` independientemente de lo que se envíe.

## Aplicar descuento (tienda)

```http
POST /api/descuentos/aplicar
```

```json
{
  "codigo": "VERANO25",
  "id_usuario": 11,
  "id_producto": 3
}
```

Verifica en orden:
1. Descuento activo y vigente (`CURRENT_DATE BETWEEN fecha_inicio AND fecha_cierre`)
2. La prenda está en `prendas_ids`
3. El cliente no ha usado este código antes (`descuentos_usos`)
4. No se ha superado el `limite_usos`

Si todo pasa, registra el uso en `descuentos_usos` y suma 1 a `usos_actuales`.

**Respuesta:**
```json
{
  "valor_descuento": 20,
  "mensaje": "Descuento del 20% aplicado correctamente."
}
```

## Productos activos (selector de prendas)

```http
GET /api/descuentos/productos-activos
```

Devuelve productos con `estado = 'activo'` junto con su imagen principal para el selector visual del formulario de descuentos.

## Validaciones

| Campo | Reglas |
|---|---|
| `codigo` | Obligatorio al crear, máximo 50 caracteres, único |
| `descripcion` | Obligatoria, máximo 255 caracteres |
| `valor_descuento` | Obligatorio, entre **1 y 25** (%) |
| `limite_usos` | Obligatorio, entero positivo mayor a 0 |
| `fecha_inicio` | Obligatoria |
| `fecha_cierre` | Obligatoria, no puede ser anterior a `fecha_inicio` |
| `prendas_ids` | Array con al menos un elemento (al crear y editar) |

## Estados

| Estado | Descripción |
|---|---|
| `activo` | Disponible para usar |
| `inactivo` | Desactivado manualmente |
| `vencido` | Asignado automáticamente cuando `fecha_cierre < CURRENT_DATE` |
