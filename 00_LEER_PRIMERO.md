# Negocios de Caña CASUR — versión 1.1.0

Entrega de revisión: 19 de septiembre de 2026.

Se aplicó la opción A aprobada: CASUR ejecutivo claro, verde #2E7D32, azul #0D6EAF, fondo gris #F4F6F5 y superficies blancas.

Esta carpeta contiene la aplicación completa. La raíz de publicación sigue siendo `index.html`, acompañada de `sw.js`, `manifest.webmanifest`, `modules/`, `master/`, `core/` y `shared/`.

No se realizó publicación, push ni merge. Para revisar localmente, servir esta carpeta mediante HTTP; abrir el HTML por `file://` no sustituye el servidor ni permite probar una PWA correctamente.

## Lectura sugerida

1. `CAMBIOS_REALIZADOS.md`: cambios por categoría y módulo.
2. `CAMBIOS_LOGICA_CALCULOS.md`: reglas de representación, filtros y exportaciones.
3. `QA_REALIZADO.md`: pruebas efectuadas y límites de validación.
4. `ARCHIVOS_MODIFICADOS.txt`: comparación contra el ZIP recibido.
5. `CAPTURAS/`: estado anterior y posterior en computadora, más versión móvil.

## Datos y publicación posterior

Los archivos de datos originales se conservaron byte por byte. Esta entrega usa el corte contenido en el paquete recibido; no sustituye una actualización posterior de SIAGRI, de Insumos o del Maestro Central.

Antes de integrar en el repositorio, comparar esta carpeta con el `main` vigente y conservar cualquier dataset más reciente. Revisar los cambios, preparar una rama y probar la PWA en el teléfono de campo. No reemplazar una publicación vigente a ciegas con una copia de datos antigua.

Inventario continúa identificado como integración pendiente. No se añadió un inventario ficticio ni se conectaron servicios nuevos.
