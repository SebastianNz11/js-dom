console.log('Happy hacking :)')

const urlBase = "https://platzi-avo.vercel.app";
const nodoPadre = document.querySelector("#containerPadre");

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "GTQ",
    }).format(price);
    return newPrice;
};

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
        titulo.className = "tamanio tipografia letra"
        //crear el precio
        const precio = document.createElement("h3");
        precio.textContent = formatPrice(item.price);
        precio.className ="tipografia tamanio2";

        const container = document.createElement("div");
        container.append(imagen, titulo, precio);
        container.className = "col text-center"
        nodoPadre.appendChild(container);


    });
})
