let texto = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
let texto1 = "entrando en la sala de video encontre a una niña sentada en el suelo";

let cajaTexto = document.getElementsByClassName("caja-texto");
let textoNoFound = document.getElementsByClassName("texto-no-encontrado");
let textoEncriptado = document.getElementsByClassName("texto-encriptado");


let parrafoCreado = false;


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
    let textParrafo = document.createTextNode(encript(cajaTexto[0].value));
    let datoNuevo = document.getElementsByClassName("mostrar-texto");
    datoNuevo[0].appendChild(nuevoParrafo);
    nuevoParrafo.appendChild(textParrafo);
    ocultarTextoNoFound();
    parrafoCreado = true;
    console.log(textParrafo);
}

function mostrarTextoDesencriptado(){
    if (parrafoCreado){
        borrarParrafoCreado();
        parrafoCreado = false;
    }
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add("texto-creado");
    let textParrafo = document.createTextNode(desencript(cajaTexto[0].value));
    let datoNuevo = document.getElementsByClassName("mostrar-texto");
    datoNuevo[0].appendChild(nuevoParrafo);
    nuevoParrafo.appendChild(textParrafo);
    ocultarTextoNoFound();
    parrafoCreado = true;
    console.log(textParrafo);
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







