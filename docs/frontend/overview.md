---
id: overview
title: Frontend — Resumen
sidebar_position: 1
---

# Frontend

El frontend está construido con **React + Vite**, ubicado en la carpeta `Cliente/`.

## Tecnologías

| Tecnología | Uso |
|---|---|
| React 18 | UI |
| Vite | Bundler |
| React Router DOM | Rutas |
| Bootstrap Icons (`bi-*`) | Íconos (cargados desde CDN en `index.html`) |
| Axios | Peticiones HTTP en el panel admin |
| CSS custom properties | Theming (`var(--gold)`, `var(--text)`, etc.) |

## Rutas (`App.jsx`)

| Ruta | Componente | Protección |
|---|---|---|
| `/` | Login | — |
| `/login` | Login | — |
| `/recuperar` | RecuperarContrasena | — |
| `/dashboard` | Dashboard | `RutaProtegida` |
| `/productos` | Productos | `RutaProtegida` |
| `/categorias` | Categorias | `RutaProtegida` |
| `/usuarios` | Usuarios | `SoloSuperadmin` |
| `/pedidos` | Pedidos | `SoloSuperadmin` |
| `/descuentos` | Descuentos | `SoloSuperadmin` |
| `/mi-perfil` | MiPerfil | `RutaProtegida` |
| `/tienda` | Tienda | — |

**`RutaProtegida`** — verifica que exista `adminSesion` en `sessionStorage`, si no redirige a `/login`.

**`SoloSuperadmin`** — además verifica que `sesion.rol === 'superadmin'`, si no redirige a `/dashboard`.

## Sesión del administrador

Se guarda en `sessionStorage` bajo la clave `adminSesion`:

```json
{
  "token": "eyJ...",
  "rol": "superadmin",
  "nombre": "luis",
  "apellido": "gomez",
  "correo": "luis.gomez@meil.com",
  "id": 11
}
```

## Dark mode

Se activa añadiendo la clase `dark-mode` al `div` raíz en `App.jsx`. Los colores cambian vía CSS variables en `styles/global.css`:

```css
:root {
  --bg: #f4f6fb;
  --card: #ffffff;
  --text: #1e293b;
  --gold: #C9962A;
}
.dark-mode {
  --bg: #0f172a;
  --card: #1e293b;
  --text: #f1f5f9;
}
```
