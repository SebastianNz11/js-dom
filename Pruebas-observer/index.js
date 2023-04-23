 const section = document.getElementById("section-2");
 const imagen = document.getElementById("img");

 

//  lazy loading

const isIntersecting = (entry) =>{
    return entry.isIntersecting;
};


const accion = (entry) => {
    const nodo = entry.target;
    console.log("Detectando imagen");
    observador.unobserve(nodo);
};



const observador = new IntersectionObserver((entries)=> {
    entries.filter(isIntersecting).forEach(accion);
});


observador.observe(imagen);