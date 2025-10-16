document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("servicios-container");

  // Cargar servicios desde localStorage o inicializar con valores predeterminados
  const servicios = JSON.parse(localStorage.getItem("servicios")) || [
    { nombre: "Desarrollo Web", descripcion: "Sitios modernos y optimizados.", precio: 1500, imagen: "https://picsum.photos/300/200?web" },
    { nombre: "Mantenimiento de PCs", descripcion: "Optimización y limpieza del sistema.", precio: 700, imagen: "https://picsum.photos/300/200?pc" },
    { nombre: "Instalación de Redes", descripcion: "Configuración LAN y WiFi seguras.", precio: 1200, imagen: "https://picsum.photos/300/200?network" }
  ];

  // Mostrar servicios
  for (const servicio of servicios) {
    const card = document.createElement("div");
    card.classList.add("servicio");
    if (servicio.precio > 1000) card.classList.add("premium");

    const img = document.createElement("img");
    img.src = servicio.imagen;
    img.alt = servicio.nombre;
    
    const title = document.createElement("h3");
    title.textContent = servicio.nombre;

    const desc = document.createElement("p");
    desc.textContent = servicio.descripcion;

    const price = document.createElement("p");
    price.textContent = `Precio: $${servicio.precio}`;

    card.append(img, title, desc, price);
    container.appendChild(card);
  }
});
