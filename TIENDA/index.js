console.log('Happy hacking :)')

const API = "https://platzi-avo.vercel.app/api/avo";

fetch(API)
.then((response) => response.json())
.then((responseJson) => {
    responseJson.data.forEach(items => {
        //crear imagen
        const imagen = document.createElement("img");
        //crear titulo
        const titulo = document.createElement("h2");
        // crear precio
        const precio = document.createElement("h3");
        //contenedor
        const contenedor = document.createElement("div");
        contenedor.append(imagen, titulo, precio);
        document.body.append(contenedor);
    });
})
