# Across Logistics Static Site

Proyecto estático en **HTML, CSS y JavaScript puro** para validar la estructura base del sitio de Across Logistics antes de añadir funcionalidades dinámicas.

## Estructura del proyecto

```text
.
├── index.html
├── contact.html
├── quote.html
├── industries.html
├── global-network.html
├── resources.html
├── food-beverages.html
├── renewable-energies.html
├── automotive.html
├── technology.html
├── pharmaceutical-healthcare.html
├── consumer-distribution.html
├── chemicals.html
├── air-freight.html
├── sea-freight.html
├── ground-transport.html
├── customs-services.html
├── warehouse-distribution.html
├── temperature-controlled.html
├── special-cargo.html
├── ecommerce-logistics.html
├── assets/
│   ├── img/
│   │   ├── hero/
│   │   │   ├── hero-logistics.jpg
│   │   │   └── hero-logistics.png
│   │   └── industries/
│   │       └── README.md
│   └── logos/
│       └── logo-master.svg
├── css/
│   ├── reset.css
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   ├── pages.css
│   └── animations.css
└── js/
    └── main.js
```

## Páginas incluidas

### Páginas principales

- `index.html`: página de inicio con hero, accesos rápidos, servicios, credenciales, industrias, red global, CTA de cotización y recursos.
- `contact.html`: página de contacto, regiones, formulario y oficinas.
- `quote.html`: página para solicitar cotización y seleccionar servicios.
- `industries.html`: página general de soluciones por sector.
- `global-network.html`: página general de red global, regiones y oficinas.
- `resources.html`: página de recursos logísticos, FAQ y contenido educativo.

### Páginas de industrias

- `food-beverages.html`: Food & Beverages.
- `renewable-energies.html`: Renewable Energies.
- `automotive.html`: Automotive.
- `technology.html`: Technology.
- `pharmaceutical-healthcare.html`: Pharmaceutical & Healthcare.
- `consumer-distribution.html`: Consumer & Distribution.
- `chemicals.html`: Chemicals.

### Páginas de servicios

- `air-freight.html`: Air Freight.
- `sea-freight.html`: Sea Freight.
- `ground-transport.html`: Ground Transport.
- `customs-services.html`: Customs Services.
- `warehouse-distribution.html`: Warehouse & Distribution.
- `temperature-controlled.html`: Temperature Controlled.
- `special-cargo.html`: Special Cargo.
- `ecommerce-logistics.html`: e-Commerce Logistics.

## Componentes globales validados

- Todas las páginas comparten el mismo `header` global.
- Todas las páginas comparten el mismo `footer` global.
- El menú **Services** enlaza con todas las páginas de servicios.
- El menú **Industries** enlaza con la página general de sectores y las siete páginas individuales de industrias.
- El dropdown de **Services** funciona en desktop con `hover` y `focus-within`.
- El dropdown de **Services** funciona en mobile mediante click desde `js/main.js`.
- El dropdown de **Industries** reutiliza el mismo comportamiento validado de navegación.
- Los enlaces de servicios en el footer y tarjetas relacionadas apuntan a páginas existentes.
- Las rutas de CSS, JS y logo apuntan a archivos existentes.
- Las rutas de imágenes de industrias quedan preparadas en CSS, pero los JPG binarios finales no se incluyen en este PR.

## CSS

- `components.css`: componentes reutilizables como botones, header, navegación, dropdowns, menú móvil, cards y badges.
- `pages.css`: estilos organizados por bloques de página/sección:
  - Home hero.
  - Quick access.
  - Services overview.
  - Credentials.
  - Industries overview.
  - Global network.
  - Quote CTA.
  - Resources preview.
  - Footer.
  - Contact page.
  - Quote page.
  - Services index/service detail sections.
  - Industry pages.
  - Service detail modifiers.

## Pendientes antes de producción

- Sustituir enlaces temporales de redes sociales y legales por URLs oficiales cuando estén disponibles.
- Crear páginas independientes para recursos, tracking, políticas legales e industrias si el alcance del sitio crece.
- Añadir imágenes específicas por servicio cuando se entreguen assets definitivos.
- Añadir validación real o integración backend para formularios de contacto y cotización.
- Revisar textos finales con el equipo de contenido/SEO.

## Cómo revisar localmente

Al ser un sitio estático, puede abrirse directamente desde `index.html` o servirse con cualquier servidor local, por ejemplo:

```bash
python3 -m http.server 8000
```

Luego visitar `http://localhost:8000`.

## Restricciones actuales

- No se ha convertido el proyecto a framework.
- No se agregaron librerías externas nuevas.
- Se mantiene HTML, CSS y JavaScript puro.
