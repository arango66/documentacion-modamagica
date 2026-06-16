import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '🏠 Introducción',
      collapsed: false,
      items: ['introduccion/overview', 'introduccion/instalacion', 'introduccion/estructura'],
    },
    {
      type: 'category',
      label: '⚙️ Backend',
      items: [
        'backend/overview',
        'backend/autenticacion',
        'backend/usuarios',
        'backend/productos',
        'backend/categorias',
        'backend/pedidos',
        'backend/descuentos',
      ],
    },
    {
      type: 'category',
      label: '🖥️ Frontend',
      items: [
        'frontend/overview',
        'frontend/layout',
        'frontend/admin',
        'frontend/tienda',
      ],
    },
    {
      type: 'category',
      label: '🗄️ Base de datos',
      items: ['base-datos/index'],
    },
    {
      type: 'category',
      label: '🚀 Despliegue',
      items: ['despliegue/index'],
    },
  ],
};

export default sidebars;
