# Relaxus — MVP académico (objetivo 60%)

Prototipo de interfaz de gestión interna para una disquería, basado en la ERS "Disquería Vinilo & CD — Interfaz de usuario para gestión interna" (versión 1.1, 22-10-2026).

## Alcance implementado
- Inicio de sesión de demostración con validación.
- Panel principal con accesos directos, resumen y alertas de stock.
- Productos / Inventario: tabla, búsqueda por código o nombre, filtro por formato, detalle en modal y edición.
- Formulario para crear y editar productos con validación.
- Registrar venta: selección de productos y cantidades, subtotales, total, confirmación/cancelación y descuento de stock.
- Historial / Reportes: filtro por fecha y resumen del período.
- Navbar, navegación lateral y footer comunes.
- Diseño responsive con Bootstrap 5.3.3.
- Datos iniciales propios en `data/productos.json`, cargados mediante `fetch()`.

## Ejecutar
`fetch()` no funciona correctamente al abrir los HTML directamente con `file://`. Ejecuta el proyecto mediante un servidor local:
1. Abre la carpeta en VS Code y utiliza Live Server; o
2. Desde la carpeta del proyecto ejecuta `python -m http.server 8000` y visita `http://localhost:8000`.

Se requiere conexión a Internet para cargar Bootstrap desde CDN.

## Credenciales de demostración
- Usuario: `admin`
- Contraseña: `relaxus123`

No utilizar estas credenciales en producción. El login es una simulación de interfaz, no autentica contra un servidor.

## Datos y persistencia
Los productos se inicializan desde `data/productos.json` con Fetch API. Luego, las modificaciones y ventas se guardan en `localStorage` para que el prototipo pueda demostrar los flujos sin una base de datos. Esta persistencia es local al navegador y no sincroniza entre usuarios o equipos. Limpiar el almacenamiento del navegador reinicia los datos iniciales (elimina `relaxus_products` y `relaxus_sales`).

## Estructura
- `index.html`: inicio de sesión
- `panel.html`: panel principal
- `productos.html`: productos e inventario
- `producto-form.html`: crear / editar producto
- `venta.html`: registrar venta
- `historial.html`: historial y reportes
- `css/estilos.css`: estilos propios
- `js/app.js`: navegación, sesión y utilidades compartidas
- `data/productos.json`: datos iniciales de ejemplo

## GitHub: flujo sugerido
1. Crear un repositorio privado o público con la cuenta institucional.
2. Subir el contenido de esta carpeta (no subir archivos temporales).
3. Invitar a cada integrante y al docente como colaboradores desde Settings → Collaborators.
4. Cada integrante debe configurar su identidad Git y realizar commits con su propia cuenta.
5. Usar ramas descriptivas y Pull Requests hacia `main`; revisar y aprobar antes de integrar.

Ejemplo de flujo:
```bash
git checkout -b feature/inventario
git add .
git commit -m "feat: implementa búsqueda y filtros de inventario"
git push -u origin feature/inventario
```
Luego crear un Pull Request en GitHub. Los commits y PR deben ser realizados realmente por cada integrante; no se simulan en este paquete.

## Relación con la ERS
- RF-01: acceso y mensajes de validación.
- RF-02: tabla con código, nombre, formato, precio y stock.
- RF-03: acciones de crear, editar y consultar.
- RF-04: filtro por formato.
- RF-05: búsqueda por código o nombre y estado sin resultados.
- RF-06: stock bajo y agotado con texto además de color.
- RF-07: productos, cantidades, precio unitario y subtotal en venta.
- RF-08: total, confirmación y cancelación.
- RF-09: filtro de historial por fecha/rango.
- RF-10: accesos, resumen y alertas en panel.
- RNF-01: responsive para móvil, tablet y escritorio.
- RNF-02: etiquetas visibles en formularios.
- RNF-03: controles navegables por teclado y foco visible.
- RNF-04: identidad visual consistente.
- RNF-05: mensajes comprensibles.
- RNF-06: legibilidad y estados no dependientes solo del color.

## Limitaciones deliberadas
Este paquete es un prototipo de interfaz. No incluye base de datos remota, autenticación segura, perfiles/roles reales, integración contable, pagos electrónicos ni tienda pública; estos elementos están fuera del alcance indicado por la ERS.
