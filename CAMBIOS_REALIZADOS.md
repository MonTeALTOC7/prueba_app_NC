# Cambios realizados — CASUR 1.1.0

## Diseño visual

- Paleta ejecutiva clara compartida: verde CASUR #2E7D32, azul #0D6EAF, fondo #F4F6F5, tarjetas blancas y texto oscuro.
- Encabezado principal actualizado a Gerencia de Negocios de Caña.
- Estilos compartidos cargados en los documentos independientes de los módulos; el cambio no se limita al contenedor principal.
- Sombras, gradientes y efectos de movimiento reducidos. Foco de teclado visible y respeto por la preferencia de movimiento reducido.
- Se elevaron las declaraciones de texto menores de 12 px en los estilos activos revisados. Se reorganizaron componentes afectados para evitar comprimir etiquetas.
- La identidad del logo CASUR se conserva. Los colores de alerta siguen asociados a su significado.

## Inicio y navegación

- Menú lateral en computadora, buscador de módulos y tarjetas con menor cantidad de metadatos.
- Selector común para cambiar entre módulos desde la barra superior de la vista integrada.
- Inventario identificado como integración pendiente.
- Consulta opcional de reservas de Insumos para Zona Productores. Lee la fuente publicada al pulsar el botón; no descarga la base completa para pintar el inicio.
- Se distingue conectividad de fecha de los datos. La fecha de Insumos se lee del archivo de datos al consultar, no del archivo lateral metadata.json, que en la base recibida tiene un corte anterior.

## Insumos

- Ranking con selector de unidad: KG, LT, GR, QQ u otras disponibles. Las barras solo comparan cantidades de una misma unidad.
- Nombres legibles y valores fuera de las barras para que los montos pequeños no desaparezcan.
- Resumen con cuatro KPI principales; indicadores secundarios y cantidades por unidad desplegables.
- El desglose incluye todas las unidades existentes; la cabecera original omitía, entre otras, QQ.
- Diferenciación explícita entre superficie física y ha-evento. El gráfico antes denominado cobertura se identifica como carga operativa por hacienda.
- Etiqueta “registrados” para los agregados que incluyen distintos estados. No se cambió silenciosamente su universo de cálculo a solo ejecutados.
- Selección múltiple en Productores, Labores y Estados del Explorador; seleccionar todos, deseleccionar todos y limpiar.
- Paginación de 100 registros, con acceso al total filtrado; desaparece el límite visual a los primeros 300.
- Exportación del Explorador y exportaciones de Insumos/Productores que respetan los filtros de sus vistas. Hoja de contexto con alcance, fuente, corte y filtros.
- La cifra “Insumo total”, que sumaba unidades incompatibles, se sustituye visualmente por productos distintos; se retira esa columna incompatible del exporte por productor. Los detalles por producto y unidad permanecen.

## Producción / Maestro de Suertes

- Barras comparativas neutrales en lugar de clasificar magnitudes como buenas o malas por su proporción respecto al máximo.
- Valor cero representado por ancho cero, sin la barra mínima anterior del 4%.
- Unidades visibles en las barras.
- Tendencia TCH con escala vertical, zafra, unidades y promedio simple de zafras identificado como tal. Se conservan los TCH ponderados de cada punto.
- Matriz TCH × KATM con puntos accionables por teclado y tamaño ajustado mediante raíz cuadrada del área, con un mínimo visible.
- Encabezado y accesos a Cronológico, Histórico y Zonas compactados. Se conservan las funciones de consulta, selección múltiple y exportación existentes.

## TCH y fotografías

- Sin evaluaciones, el inicio muestra “—” y “Sin biometrías guardadas”, en lugar de presentar un cero como estimación productiva.
- Se incorpora una serie de proyección biométrica por fecha en la consulta de una suerte con evaluaciones: hasta 20 registros recientes.
- Se identifica como proyección; no se mezcla con TCH cosechado ni con estimado oficial.
- Sin cambios en el motor biométrico, proyección por edad, contraste por pesaje, importación del maestro, almacenamiento o rotulado de fotografías.

## Riego

- Menú, paneles de prioridad, frecuencias y comparaciones con superficies claras y etiquetas legibles.
- Se conservan umbrales, métricas y reglas de frecuencia, duración, brecha y criticidad.
- Se genera un archivo directo a partir de las mismas transformaciones del cargador R7.5.6. El navegador ya no descarga, reemplaza cadenas y crea un módulo Blob en cada arranque.
- Se mantienen el archivo original y el cargador anterior como referencias; `scripts/build-riego-stable.cjs --check` verifica equivalencia del archivo generado.
- La importación del generador de imágenes queda relativa al módulo y se probó su exportación.
- El registro central identifica Riego como 7.5.6, en lugar del rótulo previo v6.

## Labores y administración

- Presentación clara, navegación seleccionada en verde y reducción de fondos saturados en resumen, tarjetas y gráficos de Labores.
- Estilos de lectura compartidos en el Administrador SIAGRI. Se mantienen los accesos protegidos y las operaciones originales.
- Configuración de columnas en tablas simples de Producción, Insumos, TCH y Convertidor. La preferencia se guarda por módulo y estructura de tabla. Las tablas React conservan sus controles propios.

## Arquitectura y rendimiento

- Archivos comunes locales de presentación, sin bibliotecas nuevas en la aplicación.
- Se conserva la integración aislada de los módulos; no se reemplaza el stack existente.
- Ayudante de tablas limitado a módulos compatibles, sin intervenir la propiedad del DOM de React.
- PWA 1.1.0 con precaché de los nuevos recursos compartidos. La protección de última generación válida de Producción permanece intacta.
- No se borran archivos del paquete base ni se limpian bases de datos de usuario.

## Bugs y ajustes de validación

- Prueba estática de TCH adaptada a PWA integrada: busca manifest y service worker en la raíz maestra, manteniendo la validación standalone cuando corresponde. El fallo original precedía a estos cambios.
- Corregidas representaciones cuantitativas incompatibles, ceros con ancho visible y exportaciones que ignoraban filtros.
- Las validaciones y sus límites están en `QA_REALIZADO.md`.
