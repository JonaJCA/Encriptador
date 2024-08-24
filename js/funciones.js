document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.querySelector(".ingrese_texto");
    const botonEncriptar = document.querySelector(".enlace_encripta");
    const botonDesencriptar = document.querySelector(".enlace_desencripta");
    const areaTexto1 = document.querySelector("#text-area1");
    const areaTexto2 = document.querySelector("#text-area2");
    const botonCopiar = document.querySelector(".enlace_copiar");
    const imagen = document.querySelector("#img-encriptacion");
    const mensajeError = document.querySelector("#mensaje-error");

    function encriptar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function mostrarTextArea() {
        // Oculta la imagen y muestra los textareas y el botón de copiar
        if (imagen) {
            imagen.style.display = "none";
        }
        if (areaTexto1) {
            areaTexto1.classList.remove("hidden");
        }
        if (areaTexto2) {
            areaTexto2.classList.remove("hidden");
        }
        if (botonCopiar) {
            botonCopiar.classList.remove("hidden");
        }
        if (inputTexto) {
            inputTexto.style.display = "none";
        }
    }

    botonEncriptar.addEventListener("click", function(event) {
        event.preventDefault();
        const texto = inputTexto.value.toLowerCase().trim();

        if (texto === "") {
            // Muestra el mensaje de error si el campo está vacío
            if (mensajeError) {
                mensajeError.textContent = "Por favor, ingrese el texto.";
                mensajeError.classList.remove("hidden");
            }
            return;
        }

        // Oculta el mensaje de error si el texto es válido
        if (mensajeError) {
            mensajeError.textContent = "";
            mensajeError.classList.add("hidden");
        }

        const textoEncriptado = encriptar(texto);
        

        mostrarTextArea();
        
        if (areaTexto1) {
            areaTexto1.value = textoEncriptado;
        }
        if (areaTexto2) {
            areaTexto2.value = textoEncriptado;
        }
    });

    botonDesencriptar.addEventListener("click", function(event) {
        event.preventDefault();
        const texto = inputTexto.value.toLowerCase().trim();

        if (texto === "") {
            // Muestra el mensaje de error si el campo está vacío
            if (mensajeError) {
                mensajeError.textContent = "Por favor, ingrese el texto.";
                mensajeError.classList.remove("hidden");
            }
            return;
        }

        // Oculta el mensaje de error si el texto es válido
        if (mensajeError) {
            mensajeError.textContent = "";
            mensajeError.classList.add("hidden");
        }

        const textoDesencriptado = desencriptar(texto);

        mostrarTextArea();

        if (areaTexto1) {
            areaTexto1.value = textoDesencriptado;  // Usa value en lugar de textContent
        }
        if (areaTexto2) {
            areaTexto2.value = textoDesencriptado;  // Usa value en lugar de textContent
        }
    });

    botonCopiar.addEventListener("click", function(event) {
        event.preventDefault();
        // Selecciona el contenido del primer textarea
        areaTexto2.select();
        // Copia el contenido al portapapeles
        document.execCommand("copy");
    });
});