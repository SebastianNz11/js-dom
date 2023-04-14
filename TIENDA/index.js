console.log('Happy hacking :)')

const accion = (event) => {
    console.log(event.target.nodeName);
    alert("Esto es un evento!");
};

const urlBase = "https://platzi-avo.vercel.app";
const nodoPadre = document.querySelector("#containerPadre");
nodoPadre.addEventListener("click", (event) => {
    console.log(event.target.nodeName);
    if (event.target.nodeName === "H2") {
        alert("Esto es un evento para el titulo!")
    };
});

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "GTQ",
    }).format(price);
    return newPrice;
};

const tituloPag = document.querySelector(".tipografia");
tituloPag.addEventListener("click", accion);



fetch(`${urlBase}/api/avo`)
.then(respuesta => respuesta.json())
.then(responseJson => {
    responseJson.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.src = `${urlBase}${item.image}`;
        //crear titulo
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        titulo.className = "tamanio tipografia letra";
        //crear el precio
        const precio = document.createElement("h3");
        precio.textContent = formatPrice(item.price);
        precio.className ="tipografia tamanio2";

        const container = document.createElement("div");
        container.append(imagen, titulo, precio);
        container.className = "col-3 text-center"
        nodoPadre.appendChild(container);


    });
})
