//Array que alamacenara nombres de los amigos a sortear

let arregloAmigos=[];

//usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente
function agregarAmigo(){
    let inputUsuario= document.getElementById('amigo').value;
 
    //console.log(inputUsuario);
    //Bloque condicional para validar la entrada
    if (inputUsuario==''){
        alert("Por favor, inserte un nombre.")
    }else{
        //agrega al arreglo 
        arregloAmigos.push(inputUsuario);
        //limpia el imput 
        let clear=document.querySelector('#amigo');
        clear.value="";
    }
    
    actualizarListaAmigos();
    
}

//Funcion para actualizar lista de amigos
/*function actualizarListaAmigos(){
    let lista=document.getElementById('listaAmigos');
    console.log(`lisa:${lista}`);
    asignarElemento('#listaAmigos',lista);
}

function asignarElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    console.log(`asignacion:${elemento} ${texto}`)
    return;
}
actualizarListaAmigos();*/

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos'); 
   

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos y crear elementos <li> para cada amigo
    for (let i = 0; i < arregloAmigos.length; i++) {
        // Crear un nuevo elemento <li>
        const nuevoElemento = document.createElement('li');
        // Agregar el nombre del amigo como texto dentro del elemento <li>
        nuevoElemento.textContent = arregloAmigos[i];
        
        // Agregar el nuevo elemento <li> a la lista
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    let cantAmigos=arregloAmigos.length;
    let indiceAleatorio=0;
    if(arregloAmigos<=1){
        alert("Debe añadir al menos 2 amigos");
    }else{
        indiceAleatorio=Math.floor(Math.random()*cantAmigos);
    }
    //console.log(`cant amigos ${cantAmigos} y indice aleatorio:${indiceAleatorio}`);
   let amigoSorteado=document.getElementById('resultado'); 
    amigoSorteado.textContent =`el almigo sorteado es: ${arregloAmigos[indiceAleatorio]}`;
}

