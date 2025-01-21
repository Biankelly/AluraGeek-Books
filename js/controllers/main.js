import { servicesBooks } from "../services/book-services.js";

const booksContainer = document.querySelector("[data-book]");
const form = document.querySelector("[data-form]");

// Crea estructura HTML para ser renderizada dinámicamente con JS
function createCard({ name, price, image, author, id }) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="img-container">
      <img src="${image}" alt="${name}">
    </div>
    <div class="card-container--info">
      <p class="book-name">${name}</p>
      <p class="book-author">Autor: ${author}</p>
      <div class="card-container--value">
        <p>$ ${price}</p>
        <button class="delete-button" data-id="${id}">
          <img src="./assets/trashIcon.svg" alt="Eliminar">
        </button>
      </div>
    </div>
  `;

  // Asigna el evento de eliminación
  addDeleteEvent(card, id);

  return card;
}

// Asigna el evento de eliminar libro a la tarjeta
function addDeleteEvent(card, id) {
  const deleteButton = card.querySelector(".delete-button");
  deleteButton.addEventListener("click", async () => {
    try {
      await servicesBooks.deleteBook(id);
      card.remove();
      console.log(`Libro con id ${id} eliminado`);
    } catch (error) {
      console.error(`Error al eliminar el libro con id ${id}:`, error);
    }
  });
}

// Renderiza los libros en el DOM
const renderBooks = async () => {
  try {
    const listBooks = await servicesBooks.bookList();
    listBooks.forEach((book) => {
      const bookCard = createCard(book);
      booksContainer.appendChild(bookCard);
    });
  } catch (err) {
    console.error("Error al renderizar libros:", err);
  }
};

// Manejo del evento de envío del formulario
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;
  const author = document.querySelector("[data-author]").value;

  if (name === "" || price === "" || image === "" || author === "") {
    alert("Por favor, complete todos los campos");
  } 
  else {
    try {
      const newBook = await servicesBooks.createBook(
        name,
        price,
        image,
        author
      );
      console.log("libro creado:", newBook);
      const newCard = createCard(newBook);
      booksContainer.appendChild(newCard);
    } 
    catch (error) {
      console.error("Error al crear el libro:", error);
    }

    form.reset(); // Reinicia el formulario
  }
});

// Ejecuta la función de renderizado inicial
renderBooks();
