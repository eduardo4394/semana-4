const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const titulo = document.querySelector("h1");

select.addEventListener("change", showSong);

function showSong() {
  let eleccion = select.value;
  let contenido = eleccion.value;

  switch (eleccion) {
    case "lorem-ipsum":
      titulo.textContent = contenido;
      parrafo.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, magni? Distinctio accusamus eveniet debitis sed.";
      break;
    case "lorem-sipsum":
      titulo.textContent = contenido;
      parrafo.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione assumenda modi itaque.";
      break;
    case "lorem-ripsum":
      titulo.textContent = contenido;
      parrafo.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ea veniam dolore?";
      break;
    case "lorem-psum":
      titulo.textContent = contenido;
      parrafo.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae?";
      break;
    default:
      titulo.textContent = "";
      parrafo.textContent = "*Debes seleccionar una cancion";
  }
}
