document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("servicios-container");

  // Cargar servicios desde localStorage o inicializar con valores predeterminados
  const servicios = JSON.parse(localStorage.getItem("servicios")) || [
    { 
      nombre: "Desarrollo Web", 
      descripcion: "Sitios modernos y optimizados.", 
      precio: 1500, 
      imagen: "https://tekla.io/wp-content/uploads/2022/03/Recurso1.png",
      gif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
    },
    { 
      nombre: "Mantenimiento de PCs", 
      descripcion: "Optimización y limpieza del sistema.", 
      precio: 700, 
      imagen: "https://picsum.photos/300/200?pc",
      gif: "https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
    },
    { 
      nombre: "Instalación de Redes", 
      descripcion: "Configuración LAN y WiFi seguras.", 
      precio: 1200, 
      imagen: "https://picsum.photos/300/200?network",
      gif: "https://media.giphy.com/media/JqmupuTVZYaQX5s094/giphy.gif"
    }
  ];

  // Mostrar servicios
  for (const servicio of servicios) {
    const card = document.createElement("div");
    card.classList.add("servicio");
    if (servicio.precio > 1000) card.classList.add("premium");

    const img = document.createElement("img");
    img.src = servicio.imagen;
    img.alt = servicio.nombre;
    
    // Guardar las URLs en el elemento para el hover
    img.dataset.imagenOriginal = servicio.imagen;
    img.dataset.gifHover = servicio.gif || servicio.imagen; // Si no hay gif, usa la imagen
    
    const title = document.createElement("h3");
    title.textContent = servicio.nombre;

    const desc = document.createElement("p");
    desc.textContent = servicio.descripcion;

    const price = document.createElement("p");
    price.textContent = `Precio: $${servicio.precio}`;

    // Eventos para cambiar entre imagen y GIF
    card.addEventListener("mouseenter", () => {
      img.src = img.dataset.gifHover;
    });

    card.addEventListener("mouseleave", () => {
      img.src = img.dataset.imagenOriginal;
    });

    card.append(img, title, desc, price);
    container.appendChild(card);
  }
});