function random() {
    const maximo = 123;
    const minimo = 1;
    const  resul = Math.floor(Math.random() * (maximo - minimo)) + minimo;
    return resul;
};

const crearImagen = () => {
    const contenedorAuxiliar = document.createElement("div");
    contenedorAuxiliar.className = "col-4";

    const imagen = document.createElement("img");
    imagen.className = "m-2";
    imagen.width = "320";
    imagen.height = "400";
    imagen.alt = "imagen-zorro";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    contenedorAuxiliar.appendChild(imagen);
    return contenedorAuxiliar;
};

const montarNodo = document.getElementById("images");
const boton = document.querySelector("button");

const agregarImagen = () => {
    const nuevaImagen = crearImagen();
    montarNodo.appendChild(nuevaImagen);
};

boton.addEventListener("click", agregarImagen);