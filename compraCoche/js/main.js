// JS (main.js)

// Constructor de objetos Coche
function Coche(imagen, descripcion, precio) {
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.precio = precio;
}

document.addEventListener("DOMContentLoaded", function () {
    let colorSeleccionado;
    // Define las instancias de la clase Coche con diferentes colores
    const cocheBlanco = new Coche("img/coche_blanco.jpg", "Coche blanco elegante y moderno.", 25000);
    const cocheAzul = new Coche("img/coche_azul.jpg", "Coche azul con un toque deportivo.", 27000);
    const cocheVerde = new Coche("img/coche_verde.jpg", "Coche verde para los amantes de la naturaleza.", 26000);

    // Mapea las instancias de Coche por color
    const coches = {
        blanco: cocheBlanco,
        azul: cocheAzul,
        verde: cocheVerde
    };

    // Función para cambiar la imagen y mostrar detalles del coche seleccionado
    window.cambiarImagen = function () {
        borrarMensajes(); // Borra los mensajes antes de mostrar uno nuevo
        const colorSelect = document.getElementById('colorSelect');
        const cocheSeleccionado = coches[colorSelect.value];
        //Este if es para que no de error al iniciar ya que no se ha seleccionado ningun coche
        if (cocheSeleccionado) {
            const imagen = document.getElementById('cocheImagen');
            imagen.src = cocheSeleccionado.imagen;

            const precioTexto = document.getElementById('precioTexto');
            const descripcionTexto = document.getElementById('descripcionTexto');

            precioTexto.innerHTML = `<p id="precioTexto" class="card-text"><small class="text-muted">Precio: $${cocheSeleccionado.precio}</small></p>`;
            descripcionTexto.textContent = `Descripción: ${cocheSeleccionado.descripcion}`;                    
        }
        colorSeleccionado = colorSelect.value; // Actualiza colorSeleccionado
    };

    // Llamar a la función cambiarImagen() al cargar la página para mostrar el coche por defecto
    cambiarImagen();
    // Obtener el botón de comprar
    const comprarBtn = document.querySelector('.btn-primary');

    // Agregar un event listener al botón
    comprarBtn.addEventListener('click', function () {
        // Mostrar mensaje según el color seleccionado
        switch (colorSeleccionado) {
            case 'azul':
                mostrarMensaje('¡Gracias por comprar este increíble coche azul!', 'azul'); // Ejemplo con fondo azul
                break;
            case 'verde':
                mostrarMensaje('¡Gracias por comprar este hermoso coche verde!', 'verde'); // Ejemplo con fondo verde
                break;
            default:
                mostrarMensaje('¡Gracias por comprar este elegante coche blanco!', 'blanco'); // Ejemplo con fondo blanco por defecto
        }
    });
});

function mostrarMensaje(mensaje, colorFondo) {
    const cardBody = document.querySelector('.card-body');

    // Verificar si ya hay un mensaje existente
    const mensajeExistente = cardBody.querySelector('.mensaje-compra');

    // Si ya hay un mensaje, no se crea uno nuevo
    if (mensajeExistente) {
        console.log('Ya hay un mensaje existente. No se creará uno nuevo.');
        return;
    }

    // Crear un nuevo elemento para mostrar el mensaje
    const mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;

    // Añadir estilos al mensaje
    mensajeElemento.classList.add('mensaje-compra'); // Nueva clase para identificar el mensaje
    mensajeElemento.style.padding = '10px';
    mensajeElemento.style.marginTop = '10px';

    // Cambiar el color de fondo según el parámetro colorFondo
    switch (colorFondo) {
        case 'blanco':
            mensajeElemento.style.backgroundColor = '#000000'; // Negro
            mensajeElemento.style.color = '#ffffff'; // Texto en blanco para mejor contraste
            break;
        case 'azul':
            mensajeElemento.style.backgroundColor = '#0000ff'; // Azul
            mensajeElemento.style.color = '#ffffff'; // Texto en blanco para mejor contraste
            break;
        case 'verde':
            mensajeElemento.style.backgroundColor = '#00ff00'; // Verde
            break;
    }

    mensajeElemento.style.border = '1px solid #d6e9c6'; // Borde verde claro
    mensajeElemento.style.borderRadius = '4px'; // Bordes redondeados

    // Insertar el mensaje después del botón de comprar
    cardBody.insertBefore(mensajeElemento, cardBody.children[cardBody.children.length - 1]);
}

function borrarMensajes() {
    // Obtener todos los elementos de mensajes y eliminarlos
    const mensajes = document.querySelectorAll('.card-body > div.mensaje-compra');
    mensajes.forEach(mensaje => mensaje.remove());
}
