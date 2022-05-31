let mi_imagen = document.querySelector("img");
mi_imagen.onclick = function () {
    let mi_src = mi_imagen.getAttribute("src");
    if(mi_src === "images/firefox1.png"){
        mi_imagen.setAttribute("src", "images/firefox2.jpg");
    } else{
        mi_imagen.setAttribute("src", "images/firefox1.png");
    }
}

let mi_boton = document.querySelector("button");
let mi_titulo = document.querySelector('h1');

if(!localStorage.getItem("nombre")){
    establecerNombreUsuario();
}else{
    let nombre_almacenado = localStorage.getItem("nombre");
    mi_titulo.textContent = "Mozilla es genial, " + nombre_almacenado;
}

mi_boton.onclick = function(){
    establecerNombreUsuario();
}

function establecerNombreUsuario(){
    let mi_nombre = prompt("Por favor, ingresa tu nombre. ")
    localStorage.setItem("nombre", mi_nombre);
    mi_titulo.textContent = "Mozilla e genial, " + mi_nombre; 
}