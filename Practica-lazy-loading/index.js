function random() {
  const maximo = 123;
  const minimo = 1;
  const resul = Math.floor(Math.random() * (maximo - minimo)) + minimo;
  return resul;
}

const crearImagen = () => {
  const contenedorAuxiliar = document.createElement("div");
  const imagen = document.createElement("img");
  contenedorAuxiliar.className = "col-4";
  imagen.alt = "Imagen-zorro";
  imagen.width = "320";
  imagen.className = "m-2";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  contenedorAuxiliar.appendChild(imagen);

  return contenedorAuxiliar;
};

const boton = document.getElementById("agregar");

const agregarImagen = () => {
  const addImagen = crearImagen();
  const agregarNodo = document.getElementById("cont-imagen");
  agregarNodo.appendChild(addImagen);
  detecccion(addImagen);
};

boton.addEventListener("click", agregarImagen);

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const accion = (entry) => {
    const nodo = entry.target;
    const imagen = nodo.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    console.log("Detectando una intersercción!");
    observador.unobserve(nodo);
};


const observador = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

const detecccion = (imagen) => {
    observador.observe(imagen);
};
