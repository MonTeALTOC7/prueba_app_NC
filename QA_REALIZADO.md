# Validación realizada — CASUR 1.1.0

Fecha de cierre: 19 de septiembre de 2026.

## Resultado

- **19/19 pruebas funcionales de navegador aprobadas**, incluyendo siete vistas móviles.
- **22/22 pruebas existentes de TCH aprobadas**, además de su validación estática.
- **5/5 comprobaciones de PWA aprobadas**: actualización y cuatro rutas sin red después de visitarlas.
- Sintaxis de los 21 scripts JavaScript revisados aprobada, respetando la diferencia entre scripts clásicos y módulos.
- Generación de Riego comprobada contra el resultado del cargador original. Una advertencia histórica de etiqueta opcional se conserva y no bloquea el arranque.
- Comparación SHA-256: 20 archivos originales bajo directorios `data/` y `datos/` idénticos, incluido el README de datos. Ningún archivo original eliminado.

## Navegador y datos

Chromium 153 mediante Playwright; vistas de computadora y móvil de 390 × 844 px. En las siete vistas móviles, el ancho total del documento no excede el ancho de pantalla y no se registraron excepciones JavaScript. Esto no equivale a una auditoría completa WCAG ni de cada interacción posible.

Las pruebas funcionales bloquearon solicitudes externas y usaron las bases publicadas dentro del ZIP. Riego depende de la fecha del navegador: el reloj de las pruebas se fijó en **18 de septiembre de 2026, 18:00 UTC**, para comparar con la referencia original sin que un cambio de día altere sus pendientes. En uso normal se conserva el reloj real.

Valores de control: Insumos/Zona Productores, 221 eventos, 218 ejecutados, 3 reservas y 759.9 ha físicas; TCH, 1,053 suertes; Riego en la fecha de referencia, 441.2 ha ejecutadas, 153.8 ha de emergencia, 146.4 ha pendientes, 71 días y frecuencia 35 días. Se trata de referencias del paquete recibido, no de una certificación de vigencia de la base.

## Pruebas funcionales

1. Inicio: filtro de módulos y consulta de reservas: aprobado.
2. Navegación: módulo integrado y selector común: aprobado.
3. Insumos: conservación de indicadores y unidades separadas: aprobado.
4. Insumos: selección múltiple, ninguno, todos y paginación: aprobado.
5. Insumos: exportación real de selección y contexto: aprobado.
6. Insumos: exportación respeta búsqueda de producto: aprobado.
7. Producción: barras cero, etiquetas y escala de TCH: aprobado.
8. TCH: sin evaluaciones no muestra producción cero: aprobado.
9. Riego: carga directa y conservación del resumen: aprobado.
10. Labores: datos base y navegación de detalle: aprobado.
11. Riego: exportación de imagen y Excel: aprobado.
12. Tabla de Insumos: columnas visibles y restauración: aprobado.
13. Móvil 390px: inicio: aprobado.
14. Móvil 390px: produccion: aprobado.
15. Móvil 390px: tch: aprobado.
16. Móvil 390px: riego: aprobado.
17. Móvil 390px: insumos: aprobado.
18. Móvil 390px: labores: aprobado.
19. Móvil 390px: inventario: aprobado.

## Exportaciones y persistencia

Se descargaron archivos reales de reservas de Insumos y reportes PNG/XLSX de Riego. El Excel de reservas contiene tres registros y hoja de contexto. La búsqueda ENVOKE coincide entre resumen y detalle exportados. El Excel de Riego se abrió y contiene las hojas Resumen, Suertes Críticas y Productores Completo; su imagen exportada se incluye en CAPTURAS.

La prueba de actualización cargó la versión original, creó registros de control en IndexedDB y localStorage y entradas de control en cachés de módulos y última generación válida de Producción; después activó 1.1.0 y comprobó su conservación. También abrió sin red Inicio, Insumos, TCH y Producción tras una visita previa. No se garantiza funcionamiento offline de todas las funciones externas.

## Reproducibilidad

Desde la carpeta de la aplicación:

```bash
node scripts/build-riego-stable.cjs --check
npm --prefix modules/tch run validate
node scripts/qa-browser.cjs
```

Las dos primeras comprobaciones usan Node y no requieren instalar dependencias de la aplicación. La tercera requiere Playwright y su Chromium disponibles en el entorno de desarrollo; opcionalmente acepta `CHROMIUM_PATH`. Inicia un servidor local en el puerto 8765, genera `qa-artifacts/` y no publica ni escribe en servicios externos. Las expectativas numéricas corresponden a este corte de datos; deberán actualizarse al sustituir las bases. Los resultados ejecutados se conservan en `docs/qa/`.

## Alcance y pendientes de validación

- No se realizaron escrituras, sincronización ni pruebas autenticadas contra Supabase o servicios de producción.
- GPS, cámara, instalación y funcionamiento prolongado en teléfonos Android/iOS reales requieren prueba de campo.
- Se preservaron las fórmulas existentes; no se realizó una auditoría agronómica o financiera independiente de todos sus resultados.
- Inventario continúa pendiente de integración, como en el paquete original.
- Antes de integrar esta versión con una publicación más reciente, conservar los datasets vigentes y comparar con el repositorio actual. Este ZIP no se desplegó.
