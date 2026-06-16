import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ModaMagica/__docusaurus/debug',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug', 'f5e'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/config',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/config', '271'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/content',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/content', 'e18'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/globalData',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/globalData', 'a7f'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/metadata',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/metadata', 'e8f'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/registry',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/registry', 'e54'),
    exact: true
  },
  {
    path: '/ModaMagica/__docusaurus/debug/routes',
    component: ComponentCreator('/ModaMagica/__docusaurus/debug/routes', '417'),
    exact: true
  },
  {
    path: '/ModaMagica/',
    component: ComponentCreator('/ModaMagica/', '2e0'),
    routes: [
      {
        path: '/ModaMagica/',
        component: ComponentCreator('/ModaMagica/', '2b1'),
        routes: [
          {
            path: '/ModaMagica/',
            component: ComponentCreator('/ModaMagica/', 'e21'),
            routes: [
              {
                path: '/ModaMagica/backend/autenticacion',
                component: ComponentCreator('/ModaMagica/backend/autenticacion', '9a8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/categorias',
                component: ComponentCreator('/ModaMagica/backend/categorias', '128'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/descuentos',
                component: ComponentCreator('/ModaMagica/backend/descuentos', '0ae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/overview',
                component: ComponentCreator('/ModaMagica/backend/overview', '631'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/pedidos',
                component: ComponentCreator('/ModaMagica/backend/pedidos', 'cbc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/productos',
                component: ComponentCreator('/ModaMagica/backend/productos', '74a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/backend/usuarios',
                component: ComponentCreator('/ModaMagica/backend/usuarios', '280'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/base-datos/',
                component: ComponentCreator('/ModaMagica/base-datos/', '2c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/despliegue/',
                component: ComponentCreator('/ModaMagica/despliegue/', 'a59'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/frontend/',
                component: ComponentCreator('/ModaMagica/frontend/', '815'),
                exact: true
              },
              {
                path: '/ModaMagica/frontend/admin',
                component: ComponentCreator('/ModaMagica/frontend/admin', '6dc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/frontend/layout',
                component: ComponentCreator('/ModaMagica/frontend/layout', '665'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/frontend/overview',
                component: ComponentCreator('/ModaMagica/frontend/overview', '8b8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/frontend/tienda',
                component: ComponentCreator('/ModaMagica/frontend/tienda', '15d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/introduccion/estructura',
                component: ComponentCreator('/ModaMagica/introduccion/estructura', 'd32'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/introduccion/instalacion',
                component: ComponentCreator('/ModaMagica/introduccion/instalacion', '9c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ModaMagica/',
                component: ComponentCreator('/ModaMagica/', '5c3'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
