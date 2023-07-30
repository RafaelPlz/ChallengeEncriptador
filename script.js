// Objeto que contiene paa futuras modificaciones
const reglasEncriptacion = {
    encriptar: {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat',
    },
    desencriptar: {
      'ai': 'a',
      'enter': 'e',
      'imes': 'i',
      'ober': 'o',
      'ufat': 'u',
    },
  };
  
  
  var botonEncriptar = document.querySelector(".btn_encript");
  var botonDesencriptar = document.querySelector(".btn_desencript");
  var munieco = document.querySelector(".box_image");
  var contenedor = document.querySelector(".box_paragraph");
  var resultado = document.querySelector(".box_message_encript");
  const btnCopiar = document.querySelector(".btn_copy");
  
  // Asignación de botones
  botonEncriptar.onclick = encriptar;
  botonDesencriptar.onclick = desencriptar;
  
  // Función para encriptar el texto
  function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    const resultadoEncriptado = encriptarTexto(cajatexto);
    resultado.textContent = resultadoEncriptado; 
    btnCopiar.style.display = resultadoEncriptado.trim() !== "" ? "block" : "none";
  }
  
  // Función para desencriptar el texto
  function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
  }
  
  // Función para recuperar el texto 
  function recuperarTexto() {
    const cajatexto = document.querySelector(".message");
    return cajatexto.value;
  }
  
  function ocultarAdelante() {
    munieco.classList.add("hide");
    contenedor.classList.add("hide");
  }
  
  // Función para encriptar el texto 
  function encriptarTexto(mensaje) {
    const texto = mensaje.toLowerCase();
    let textoFinal = "";
  
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto[i];
      textoFinal += reglasEncriptacion.encriptar[caracter] || caracter;
    }
  
    return textoFinal;
  }
  
  // Función para desencriptar el texto 
  function desencriptarTexto(mensaje) {
    const texto = mensaje.toLowerCase();
    let textoFinal = "";
    let i = 0;
  
    while (i < texto.length) {
      let found = false;
  
      for (let j = 5; j >= 1; j--) {
        const caracter = texto.slice(i, i + j);
        if (reglasEncriptacion.desencriptar.hasOwnProperty(caracter)) {
          textoFinal += reglasEncriptacion.desencriptar[caracter];
          i += j;
          found = true;
          break;
        }
      }
  
      if (!found) {
        textoFinal += texto[i];
        i++;
      }
    }
  
    return textoFinal;
  }

  btnCopiar.style.display = "none";
  
  btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".box_message_encript").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles: ", contenido);
  });