console.log('Happy hacking :)')

const urlBase = "https://platzi-avo.vercel.app";
const containerNode = document.querySelector("#container");

fetch(`${urlBase}/api/avo`)
.then((response) => response.json())
.then((responseJson) => {
    responseJson.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.src = `${urlBase}${item.image}`;
        //crear titulo
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        // crear precio
        const precio = document.createElement("h3");
        precio.textContent = item.price;
        //contenedor
        const contenedor = document.createElement("div");
        contenedor.append(imagen, titulo, precio);
        containerNode.append(contenedor);
    });
})
