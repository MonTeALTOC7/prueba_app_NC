# Cambios de lógica y representación

No se modificaron fórmulas agronómicas, financieras, impuestos, datos de entrada ni registros persistidos. Sí se modificó lógica de presentación, selección y exportación, detallada abajo.

| Área | Antes | Ahora | Validación e impacto |
|---|---|---|---|
| Ranking Insumos | Ordenaba gramos, litros, kg y quintales en una sola escala. | Selecciona una unidad y compara solo productos de esa unidad. | Verificado en navegador con KG y LT; conserva cantidades y catálogo. |
| Barras Producción | `ancho = max(4, valor/maximo*100)`; semáforo relativo al mayor valor. | Ancho cero para cero; comparación neutral; unidades explícitas. | Caso cero/100 aprobado. No modifica el indicador. |
| Matriz TCH × KATM | Diámetro crecía linealmente con el área. | Diámetro proporcional a raíz cuadrada del área, con mínimo de 6 px. | Ajuste de codificación visual; coordenadas y área originales conservadas. |
| Tendencia TCH | Rango vertical implícito y promedio sin aclaración suficiente. | Eje numérico, TCH (t/ha), zafra y promedio simple de puntos identificado. | Datos de cada zafra conservados; no se sustituye el promedio ponderado de negocio. |
| Sin evaluaciones TCH | Inicio mostraba cero en proyección/toneladas. | Muestra “—” y estado sin biometrías. | Se distingue ausencia de medición de producción cero. |
| Evolución por suerte | Listado de biometrías recientes. | Se añade comparación temporal de los valores proyectados guardados. | Usa la misma selección de hasta 20 registros; no recalcula la proyección. |
| Explorador Insumos | Filtros individuales y máximo visible de 300 eventos. | Selección múltiple y páginas de 100 registros. | Selección vacía = 0 registros; seleccionar todos = universo vigente; filtros se cruzan por intersección. |
| Exportación | Insumos/Productores exportaban el alcance completo aun con búsqueda activa. | Aplican los mismos filtros de la vista; Explorador exporta todo el resultado filtrado, no solo la página. | Libro descargado con 3 reservas y hoja de contexto; búsqueda ENVOKE coincide en resumen y detalle. |
| Total de cantidades heterogéneas | Se mostraba/exportaba una suma de unidades incompatibles. | Se muestra conteo de productos distintos y detalle separado por producto/unidad. | No se alteran cantidades ni conversiones. Se elimina la columna inválida del exporte por productor. |
| Arranque Riego | Aplicaba transformaciones al bundle en el navegador. | Se materializa el mismo resultado al preparar la entrega. | Generador reproducible con comprobación de equivalencia; no introduce fórmulas nuevas. |

## Archivos relevantes

- `modules/produccion/index.html`: barras, tendencia, matriz y presentación.
- `modules/insumos/app.js`: selector de unidad, resumen, filtros, paginación, exportaciones.
- `modules/tch/js/app.js`: estado vacío y serie por suerte.
- `modules/riego/index.html`: usa el bundle materializado.
- `modules/riego/assets/index-R756-UI110.js`: resultado generado del cargador preexistente.
- `scripts/build-riego-stable.cjs`: generación y comprobación.
- `app.js`: navegación y lectura opcional de pendientes publicados.

## Persistencia y compatibilidad

Sin migraciones de registros ni cambios en esquemas IndexedDB. La nueva preferencia de columnas utiliza claves `casur_ui_columns_v1:*`. Las revisiones locales de alertas siguen consultándose en Insumos; el resumen del inicio identifica expresamente que usa el archivo publicado.

La serie biométrica por fecha no equivale a TCH real de cosecha. La suma de ha-evento incluye repeticiones y no debe interpretarse como superficie física única.

El cargador antiguo de Riego contiene una advertencia no fatal por una etiqueta histórica que ya no encuentra. Se preservó su comportamiento: este trabajo no reinterpretó textos o fórmulas agronómicas por una sustitución adicional.
