// Validar texto
function validarTexto(texto){
    var regraValidacao = new RegExp("[°!$%&/()=?¡'¿áéíóú]|[0-9]","g");
    var mensagem = texto.value;

    if (mensagem==""){
        alert("Digite a mensagem");
        return false;
    }else{
        if (!regraValidacao.test(mensagem)){
            return true;
        }else{
            alert("Serão aceito somente letras, sem acentos");
            return false;
        }
    }
}

// Criptar
function criptar (texto){
    var textoCriptar = texto.value;
    textoCriptar = textoCriptar.toLowerCase();
    textoCriptar = textoCriptar.replaceAll("e", "enter");    
    textoCriptar = textoCriptar.replaceAll("i", "imes");    
    textoCriptar = textoCriptar.replaceAll("a", "ai");    
    textoCriptar = textoCriptar.replaceAll("o", "ober");    
    textoCriptar = textoCriptar.replaceAll("u", "ufar");  
    document.querySelector("#msg").value = textoCriptar;    
}

//Descriptar
function descriptar (texto){
    var textoADescriptar = texto.value;
    textoADescriptar = textoADescriptar.toLowerCase();
    textoADescriptar = textoADescriptar.replaceAll("enter", "e");    
    textoADescriptar = textoADescriptar.replaceAll("imes", "i");    
    textoADescriptar = textoADescriptar.replaceAll("ai", "a");    
    textoADescriptar = textoADescriptar.replaceAll("ober", "o");    
    textoADescriptar = textoADescriptar.replaceAll("ufar", "u");
    document.querySelector("#msg").value = textoADescriptar;   
}
 //copiar   
function copiar (input){
    input.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
}

//Botones
var botaoCriptar = document.querySelector("#btn-criptar");
var textoDigitado = document.querySelector("#input-texto");
var botaoDescriptar = document.querySelector("#btn-descriptar");
var botaoCopiar = document.querySelector("#btn-copiar");
var copiarTexto = document.querySelector("#msg");

botaoCriptar.addEventListener("click",function(event){
    event.preventDefault();       
    validarTexto(textoDigitado);   
    criptar(textoDigitado);      
    textoDigitado.value = "";       
})

botaoDescriptar.addEventListener("click",function(event){
    event.preventDefault();         
    validarTexto(textoDigitado);   
    descriptar(textoDigitado);   
    textoDigitado.value = "";       
})

botaoCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiar(copiarTexto)
})