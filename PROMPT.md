# Prompt de contexto para el proyecto "espejos"

## ¿Qué hace el sitio?
- Es una web de acceso público con login, cotización en tiempo real de USD/CLP y BTC/USD, y un diseño visual moderno y oscuro.
- Permite iniciar sesión con usuario y clave (demo: demo/demo123) usando IndexedDB en el navegador.
- Muestra el valor del dólar y bitcoin en tiempo real usando APIs públicas.

## Lógica principal
- **Login:**
  - Usa IndexedDB para almacenar usuarios.
  - Al iniciar sesión correctamente, muestra un mensaje de bienvenida.
- **Cotizaciones:**
  - Consulta la API de mindicador.cl para USD/CLP y la API de Binance para BTC/USD.
  - Actualiza los valores automáticamente cada cierto tiempo.

## Parte visual
- Fondo oscuro, líneas blancas, estrellas decorativas y bloques con transparencias.
- Tres flechas SVG naranjas como ícono y elemento central.
- Responsive: se adapta a escritorio y móvil.
- Fuentes: Oswald (títulos) y Dancing Script (firma).
- Favicon: SVG de las tres flechas.

## Estructura de archivos
- `index.html`: Página principal.
- `css/estilos.css`: Todos los estilos.
- `js/usuarios.js`: Lógica de login y usuarios.
- `js/dolar.js`: Lógica para cotización USD/CLP.
- `js/btc.js`: Lógica para cotización BTC/USD.
- `img/favicon.svg`: Favicon de las tres flechas.
- `README.md`, `PUBLICAR.md`: Documentación y pasos para publicar.

## Publicación
- Se publica en GitHub Pages desde la rama `main` y carpeta raíz.
- Accesible desde cualquier dispositivo.

---

> Usa este archivo como prompt de contexto para futuras sesiones. Si lo proporcionas como entrada, podré entender rápidamente el propósito, lógica y diseño del proyecto "espejos" y ayudarte a continuar o mejorar el desarrollo.
