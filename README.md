# Presentación — Soporte TI Integral

Diapositivas navegables sobre el servicio **Soporte TI Integral** de Altecbol, armadas a partir
del portafolio de servicios (catálogo Nov 2026).

Es un proyecto independiente del mapa de servicios: no lo reemplaza ni depende de él.

## Archivos

| Archivo | Para qué |
| --- | --- |
| `index.html` | La presentación completa (18 diapositivas). Se abre con doble clic. |
| `styles.css` | Todo el diseño (colores de marca, tipografía, tarjetas, tablas). |
| `deck.js` | Navegación: teclado, botones, barra de progreso y enlaces por diapositiva. |

No necesita instalación, servidor ni conexión: solo el navegador. Las imágenes y las tipografías
se cargan de internet; si no hay conexión, el diseño sigue funcionando con fondos degradados.

## Cómo usarla

- **Avanzar / retroceder:** flechas `←` `→`, barra espaciadora, `Page Up` / `Page Down`.
- **Ir a una diapositiva:** clic en la barra de segmentos de abajo.
- **Pantalla completa:** tecla `F` (ideal para proyectar).
- **Exportar a PDF:** tecla `P` → destino "Guardar como PDF", orientación horizontal.
- **Enlace directo:** `index.html#s14` abre la diapositiva 14.
- En celular o tablet: se desliza con el dedo.

## Contenido (18 diapositivas)

1. Portada
2. El punto de partida: los problemas de no tener un responsable claro
3. Qué es Soporte TI Integral
4. Cómo se ve en la práctica (diagrama de un solo punto de contacto)
5. Los seis frentes que cubre
6. Atención a usuarios
7. Red y conectividad
8. Servidores
9. Correo y seguridad
10. Un solo interlocutor, un solo reporte
11. Cómo se atiende un caso, paso a paso
12. Qué incluye
13. Qué se cotiza aparte
14. Comparativa con Helpdesk e Infraestructura
15. Complementos del portafolio
16. Por qué con Altecbol
17. Preguntas frecuentes
18. Siguiente paso (diagnóstico)

## Reglas de contenido

- Sin precios y sin cantidades de cobertura (usuarios, sedes, horas, plazos).
- Solo dos categorías: **qué incluye** y **qué se cotiza aparte**.
- Trato formal (usted) y voz de la empresa en primera persona plural.
- Antivirus: **Kaspersky o WatchGuard**.
- Todo el contenido proviene del catálogo; no se agregaron servicios inexistentes.

## Cómo editar

- **Textos:** directamente en `index.html`. Cada diapositiva es un `<section class="slide" id="sN">`.
- **Colores de marca:** variables al inicio de `styles.css` (`--cy` cian, `--bl` azul, `--bg` fondo).
- **Imágenes:** cada bloque `.media` tiene una foto de Unsplash; si el enlace falla se oculta sola y
  queda el degradado con el ícono de marca.
- **Agregar una diapositiva:** copiar un `<section>`, darle un `id` nuevo y listo. La barra inferior
  y el contador se generan automáticamente.
