
function random() {
    const maximo = 123;
    const minimo = 1;
    const  resul = Math.floor(Math.random() * (maximo - minimo)) + minimo;
    return resul;
};

function crearImagen() {
    const contenedorAuxiliar = document.createElement("div");
    contenedorAuxiliar.className = "col-4";

    const imagen = document.createElement("img");
    imagen.className = "m-2";
    imagen.width = "320";
    imagen.alt ="imagen-zorro";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    contenedorAuxiliar.appendChild(imagen);
    return contenedorAuxiliar;
};

const nuevaImagen = crearImagen();
const montarNodo = document.getElementById("images");

const button = document.querySelector("button");


function agregarImagen() {
    const addImage = crearImagen();
    montarNodo.appendChild(addImage);
    registroDeImagen(addImage);
}
button.addEventListener("click", agregarImagen);



//Lazy Loading

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const cargarImagen = (entry) => {
    const nodoContenedor = entry.target;
    const imagenAdd = nodoContenedor.firstChild;
    const url = imagenAdd.dataset.src;
    imagenAdd.src = url;
    observador.unobserve(nodoContenedor);
};


const observador = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(cargarImagen);
});

const registroDeImagen = (imagen) => {
    observador.observe(imagen);
};




    
