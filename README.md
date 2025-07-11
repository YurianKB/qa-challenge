# QA Challenge
## Node.js — Pruebas de API REST + integración 

Escribir pruebas unitarias y de integración con Jest para:
Validar el endpoint GET /users/:id con:

- Usuario existente
- Usuario no encontrado (404)
- Configurar y usar MongoMemoryServer para las pruebas (evitar DB real).
- Añadir pruebas para otro endpoint POST /users que cree un usuario con validación.

##  Mongodb

Base de datos: videoclub
Colección: peliculas

Ejemplo de documentos en peliculas:

```
{
  "_id": ObjectId("..."),
  "titulo": "Volver al Futuro",
  "anio": 1985,
  "genero": "Ciencia Ficción",
  "calificacion": 8.5,
  "director": "Robert Zemeckis",
  "disponible": true
}
```

```
{
  "titulo": "Titanic",
  "anio": 1997,
  "genero": "Romance",
  "calificacion": 7.8,
  "director": "James Cameron",
  "disponible": false
}
```

### Llenar el archivo answers.txt con las siguientes queries:
- Mostrar todas las películas.
- Mostrar las películas del año 1997.
- Mostrar las películas con calificación mayor a 8.
- Mostrar solo el título y año de cada película.
- Mostrar películas que estén disponibles (disponible: true).
- Agrega una película nueva: "Inception", 2010, Ciencia Ficción, 8.8, Christopher Nolan, disponible.
- Actualizar la calificación de "Titanic" a 8.0.
- Consulta todas las películas dirigidas por Christopher Nolan.
- Muestra todas las películas ordenadas por año descendente.

### Explcica brevemente en el archivo errors.txt ¿Cómo identificarías errores en la información que pudieran conllevar a estar repitiendo registros?

¿Cómo identificarías posibles errores o inconsistencias en los títulos que puedan estar causando registros duplicados?
Por ejemplo: "Lord of the rings", "Lrd of the rings", "Lord  of the rings", "Lord of the rings." 

##  E2E

Hacer un proceso de E2E para la acción del login en el siguiente portal

a. Automatizar el proceso de login:

- Ir a la página de login del portal.
- Ingresar usuario y contraseña.
- Validar que se redirige al dashboard.

b. Validar elementos post-login:

- Confirmar que el dashboard carga correctamente (por ejemplo, que aparece el texto “Bienvenido” o un elemento único).
- Validar que el nombre de usuario se muestra en la interfaz.

c. Realizar navegación y acción clave:

- Ir al menú de Viewership > Households.
- Seleccionar una opción específica (por ejemplo, "Add +").
- Validar que se carga una tabla o sección esperada.

d. Capturar errores o comportamientos inesperados.

- Si algún paso falla (mensaje de error, pantalla en blanco, etc.), debe documentarlo.
- Tomar screenshots en puntos clave.
