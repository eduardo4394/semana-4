const select = document.querySelector("select");
const parrafo = document.querySelector("p");
const titulo = document.querySelector("h1");

select.addEventListener("change", showSong);

function showSong() {
  let eleccion = select.value; 
  let contenido = eleccion.value 

  if (eleccion === "lorem-ipsum") {
    titulo.textContent = contenido;    
    parrafo.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, magni? Distinctio accusamus eveniet debitis sed.";
  } else if (eleccion === "lorem-sipsum") {
    titulo.textContent = contenido;
    parrafo.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione assumenda modi itaque.";
  } else if (eleccion === "lorem-ripsum") {
    titulo.textContent = contenido;
    parrafo.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ea veniam dolore?";
  } else if (eleccion === "lorem-psum") {
    titulo.textContent = contenido;
    parrafo.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae?";
  } else {
    titulo.textContent = "";
    parrafo.textContent = "*Debes seleccionar una cancion";
  }
}
