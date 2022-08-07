let cajaTexto = document.getElementsByClassName("caja-texto");
let textoNoFound = document.getElementsByClassName("texto-no-encontrado");
let textoEncriptado = document.getElementsByClassName("texto-encriptado");

let parrafoCreado = false;

const normalize = (function () {
    var from =
        "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç!¡¿?#$%&|´´`ªº^Ç*+/¨¨=(){}[].,;:_°>\\<\"'",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
  
    for (var i = 0, j = from.length; i < j; i++)
      mapping[from.charAt(i)] = to.charAt(i);
  
    return function (str, urls = true) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i))) ret.push(mapping[c]);
        else ret.push(c);
      }
      return urls
        ? ret.join("")
        : ret
            .join("")
            .replace(/[^-A-Za-z0-9]+/g, "-")
            .toLowerCase();
    };
})();

function encript(texto){
    let newTexto = [];
    for (i=0; i < texto.length;i++){
        if (texto[i] == "a"){
            newTexto.push("ai");
        } else if (texto[i] == "e"){
            newTexto.push("enter");
        }else if (texto[i] == "i"){
            newTexto.push("imes");
        }else if (texto[i] == "o"){
            newTexto.push("ober");
        }else if (texto[i] == "u"){
            newTexto.push("ufat");
        }else{
            newTexto.push(texto[i]);
        }
    }
    return newTexto.join("");
}

function desencript(texto){
    let newTexto = [];
    for (i=0; i < texto.length;i++){
        if (texto[i] == "a"){
            if(texto[i+1] == "i"){
                i++;;
            }
            newTexto.push("a");
        } else if (texto[i] == "e"){
            let siguiente = [texto[i],texto[i+1],texto[i+2],texto[i+3],texto[i+4]];
            siguiente = siguiente.join("");
            if (siguiente == "enter"){
                newTexto.push("e");
                i += 4;
            }else {
                newTexto.push("e"); 
            }       
        }else if (texto[i] == "i"){
            let siguiente = [texto[i],texto[i+1],texto[i+2],texto[i+3]];
            siguiente = siguiente.join("");
            if (siguiente == "imes"){
                newTexto.push("i");
                i += 3;
            }else {
                newTexto.push("i"); 
            }  
        }else if (texto[i] == "o"){
            let siguiente = [texto[i],texto[i+1],texto[i+2],texto[i+3]];
            siguiente = siguiente.join("");
            if (siguiente == "ober"){
                newTexto.push("o");
                i += 3;
            }else {
                newTexto.push("o"); 
            }  
        }else if (texto[i] == "u"){
            let siguiente = [texto[i],texto[i+1],texto[i+2],texto[i+3]];
            siguiente = siguiente.join("");
            if (siguiente == "ufat"){
                newTexto.push("u");
                i += 3;
            }else {
                newTexto.push("u"); 
            } 
        }else{
            newTexto.push(texto[i]);
        }
    }
    return newTexto.join("");
}

function ocultarTextoNoFound(){
    textoNoFound[0].style.display = "none";
    textoEncriptado[0].style.display = "flex";
}
function ocultarTextoEncriptado(){
    textoNoFound[0].style.display = "flex";
    textoEncriptado[0].style.display = "none";
}

function mostrarTextoEncriptado(){
    if (parrafoCreado){
        borrarParrafoCreado();
        parrafoCreado = false;
    }
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add("texto-creado");
    let textParrafo = document.createTextNode(encript(normalize(cajaTexto[0].value)));
    let datoNuevo = document.getElementsByClassName("mostrar-texto");
    datoNuevo[0].appendChild(nuevoParrafo);
    nuevoParrafo.appendChild(textParrafo);
    ocultarTextoNoFound();
    parrafoCreado = true;
}

function mostrarTextoDesencriptado(){
    if (parrafoCreado){
        borrarParrafoCreado();
        parrafoCreado = false;
    }
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add("texto-creado");
    let textParrafo = document.createTextNode(desencript(normalize(cajaTexto[0].value)));
    let datoNuevo = document.getElementsByClassName("mostrar-texto");
    datoNuevo[0].appendChild(nuevoParrafo);
    nuevoParrafo.appendChild(textParrafo);
    ocultarTextoNoFound();
    parrafoCreado = true;
}

function borrarParrafoCreado(){
    document.getElementsByClassName("texto-creado")[0].remove();
}

function copiar(){
    let textoCopiar = document.querySelector(".texto-creado");
    let nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("value", textoCopiar.innerHTML);
    document.body.appendChild(nuevoInput);
    nuevoInput.select();
    document.execCommand('copy');
    document.body.removeChild(nuevoInput);
}

ocultarTextoEncriptado();







