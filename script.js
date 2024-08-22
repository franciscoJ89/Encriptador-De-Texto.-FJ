const mensajeEncriptarDesencriptar = document.querySelector('.mensaje__encriptar_desencreptar');
const mensajeEncriptadoDesencriptado = document.querySelector('.mensaje__encriptado_desencriptado');

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const texcifrado = encriptarMensaje(mensajeEncriptarDesencriptar.value);
    mensajeEncriptadoDesencriptado.value = texcifrado;
    mensajeEncriptarDesencriptar.value='';
    mensajeEncriptadoDesencriptado.style.backgroundImage='none';
}

function encriptarMensaje(stringEncriptada){
    let conjuntoDeLlaves = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < conjuntoDeLlaves.length; i++){
        if(stringEncriptada.includes(conjuntoDeLlaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(conjuntoDeLlaves[i][0],conjuntoDeLlaves[i][1]);
        }
    
    }
    return stringEncriptada;
}



function btnDesencriptar(){
    const texcifrado = desencriptarMensaje(mensajeEncriptarDesencriptar.value);
    mensajeEncriptadoDesencriptado.value = texcifrado;
    mensajeEncriptarDesencriptar.value='';
}


function desencriptarMensaje(stringDesencriptada){
    let conjuntoDeLlaves = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < conjuntoDeLlaves.length; i++){
        if(stringDesencriptada.includes(conjuntoDeLlaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(conjuntoDeLlaves[i][1],conjuntoDeLlaves[i][0]);
        }
    
    }
    return stringDesencriptada;
}
//Funcion copiar arreglada con Luri.
function btnCopiar() {
    const textoACopiar = document.querySelector(".mensaje__encriptado_desencriptado").value; // Selecciona el textarea y obtiene su valor
    navigator.clipboard.writeText(textoACopiar);
  }
    



