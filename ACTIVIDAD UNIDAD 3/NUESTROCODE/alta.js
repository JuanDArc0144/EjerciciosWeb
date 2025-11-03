document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formServicio");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = document.getElementById("precio").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    const gif = document.getElementById("gif").value.trim();

    // Validaciones para cada caso diferente, no leas esto por favor, 99% copiado de stackoverflow, creo
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-]+$/;

    if (!nombre || !descripcion || !precio || !imagen || !gif) {
      mensaje.textContent = "Todos los campos son obligatorios, quieras o no";
      mensaje.style.color = "red";
      return;
    }

    if (!regex.test(nombre) || !regex.test(descripcion)) {
      mensaje.textContent = "No se permiten caracteres especiales, como % $ # & / ( ) = ? ¿ ! ¡";
      mensaje.style.color = "red";
      return;
    }

    if (Number.isNaN(precio) || precio <= 0) {
      mensaje.textContent = "El precio debe ser un número válido mayor que 0, aquí nada es gratis amigo";
      mensaje.style.color = "red";
      return;
    }

    // Recuperar y agregar servicios ya previos, no leer, 99% copiado de stackoverflow, se los juro, el otro 1% es mio, creo
    let servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    const nuevoServicio = { nombre, descripcion, precio: Number(precio), imagen, gif };

    servicios.push(nuevoServicio);
    localStorage.setItem("servicios", JSON.stringify(servicios));

    mensaje.textContent = "Servicio agregado correctamente. Estoy cargando amigo...";
    mensaje.style.color = "green";

    setTimeout(() => {
      globalThis.location.href = "index.html";
    }, 1500);
  });
});