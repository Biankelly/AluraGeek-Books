# AluraGeek-Books

![AluraGeek Books Cover](./assets/AluraGeek%20Books%20Cover.png)

Bienvenido a **AluraGeek Books**, una web app creada para facilitar la gestión de libros con estilo, simplicidad y eficacia. Aquí puedes **explorar**, **añadir**, y **eliminar** libros, todo en una experiencia dinámica y fluida.

## 🌟 Características Principales

- **Explora**: Descubre los libros disponibles al instante.
- **Añade**: Integra nuevos libros con solo un nombre, precio, imagen y autor.
- **Elimina**: Gestiona tu lista eliminando libros que ya no necesites.
- Actualizaciones dinámicas sin recargar la página.
- Comunicación con un servidor simulado para operaciones **CRUD**.

---

## 🛠️ Tecnologías que Hacen Magia

- **HTML5/CSS3**: Estructura y diseño.
- **JavaScript (ES6 Modules)**: Interactividad y funcionalidad.
- **json-server**: Backend simulado para pruebas.
- **Fetch API**: Para solicitudes HTTP rápidas y eficientes.
- **BEM (Block Element Modifier)**: Organización impecable de clases CSS.

---

## 🚀 ¿Cómo Empezar?

### Requisitos

Asegúrate de tener **Node.js** instalado en tu equipo.

### Instrucciones

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/AluraGeek-Books.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd AluraGeek-Books.git
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Inicia el servidor JSON:

   ```bash
   npm start
   ```

5. Abre el archivo `index.html` en tu navegador favorito y disfruta.

---

## 🗂️ Organización del Proyecto

- **index.html**: Base de la aplicación.
- **styles/reset.css**: Reseteo de estilos por defecto.
- **styles/style.css**: Diseños personalizados.
- **js/controllers/main.js**: Lógica principal de gestión de libros.
- **js/services/product-services.js**: Interacciones con el servidor simulado.
- **db.json**: Base de datos para el servidor JSON.
- **package.json**: Configuración de dependencias y scripts.

---

## 🛠️ API Simulada

Con **json-server**, tienes estas rutas disponibles:

- `GET /products`: Obtén la lista completa de libros.
- `POST /products`: Añade un libro nuevo.
- `DELETE /products/:id`: Elimina un libro por su ID.

---

## 🎮 Cómo Usarlo

1. **Explora Libros**: Los libros se cargan automáticamente al abrir la página.
2. **Añade un Libro**: Completa el formulario con los datos necesarios y haz clic en **Enviar**.
3. **Elimina un Libro**: Haz clic en el ícono de la papelera junto al libro que deseas quitar.

---

Desarrollado con ❤️ por Bianka Kelly

