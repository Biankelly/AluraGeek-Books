const BASE_URL = "http://localhost:3001/books";

const bookList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error("Error al obtener la lista de libros:", error);
  }
};

const createBook = async (name, price, image, author) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image, author }),
    });

    const data = await response.json();
    console.log("Solicitud POST exitosa:", data);
    return data;
  } 
  catch (error) {
    console.error("Error en la solicitud POST:", error);
  }
};

const deleteBook = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Libro con id ${id} eliminado exitosamente`);
  } 
  catch (error) {
    console.error("Error en la solicitud DELETE:", error);
  }
};

export const servicesBooks = {
  bookList,
  createBook,
  deleteBook,
};
