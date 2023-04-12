console.log("Consumiendo API");

const urlBase = "https://platzi-avo.vercel.app";

const nodoPadre = document.querySelector("#containerPadre")

fetch(`${urlBase}/api/avo`)
.then(response => response.json())
.then(responseJson => {
    responseJson.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.src = `${urlBase}${item.image}`;
        //crear titulo
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        //crear precio
        const precio = document.createElement("h3");
        precio.textContent = item.price;

        const container = document.createElement("div");
        container.append(imagen, titulo, precio);
        nodoPadre.appendChild(container);
    });
})
.catch( error => {
    console.log(error);
});