# Uso de `fetch` — Proyecto de ejemplo

## Descripción
Este pequeño proyecto demuestra el uso de la API `fetch` en el navegador para realizar peticiones HTTP desde JavaScript. Incluye una página `index.html`, estilos en `css/style.css` y código en `js/script.js`.

## ¿Qué es `fetch`?
`fetch` es una API nativa del navegador que permite realizar peticiones HTTP (GET, POST, etc.) de forma asíncrona. Devuelve una Promise que se resuelve en un objeto `Response` cuando el servidor responde.

## ¿Cómo funciona `fetch`?
- Se invoca `fetch(url, options)` donde `options` puede incluir `method`, `headers`, `body`, etc.
- `fetch` devuelve una Promise; cuando se resuelve, entrega un objeto `Response`.
- Para extraer el cuerpo de la respuesta se usan métodos del `Response` como `response.json()`, `response.text()` o `response.blob()` —estos también devuelven Promises.
- Es importante comprobar `response.ok` o `response.status` para detectar errores HTTP (por ejemplo 4xx/5xx).
- Manejo de errores: `fetch` solo rechaza la Promise por fallos de red; los errores HTTP deben detectarse e interpretarse manualmente.
- CORS: si la petición va a otro origen, el servidor debe exponer los encabezados CORS adecuados para permitir el acceso.

### Flujo típico
1. Crear la petición con `fetch(url, options)`.
2. Esperar la Promise y recibir `Response`.
3. Comprobar `response.ok` y leer el body con `await response.json()`.
4. Manejar errores con `try/catch` o `.catch()`.

## Ejemplos básicos

Ejemplo GET con async/await:

```js
async function obtenerDatos() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error en fetch:', err);
  }
}

obtenerDatos();
```

Ejemplo POST enviando JSON:

```js
async function enviarDatos(payload) {
  try {
    const res = await fetch('https://api.example.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    return result;
  } catch (err) {
    console.error('Error al enviar:', err);
  }
}
```

## Cómo está armado este proyecto
- `index.html`: página principal que carga los estilos y `js/script.js`.
- `css/style.css`: estilos básicos del proyecto.
- `js/script.js`: código JavaScript; aquí es donde se colocan las llamadas `fetch`.

Para ver y probar el proyecto, usa la extensión Live Server de VS Code para servir la carpeta del proyecto.

## Notas y buenas prácticas
- Comprueba siempre `response.ok` antes de procesar datos.
- Usa `Content-Type` apropiado en `headers` cuando envíes JSON.
- Maneja errores de red y errores HTTP por separado.
- Ten en cuenta las políticas CORS cuando llames APIs externas.



