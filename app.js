//Array que alamacenara nombres de los amigos a sortear

let listaAmigos=[];
let lista="hola";
//usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente
function agregarAmigo(){
    let inputUsuario= document.getElementById('amigo').value;
 
    //console.log(inputUsuario);
    //Bloque condicional para validar la entrada
    if (inputUsuario==''){
        alert("Por favor, inserte un nombre.")
    }else{
        //agrega al arreglo 
        listaAmigos.push(inputUsuario);
        //limpia el imput 
        let clear=document.querySelector('#amigo');
        clear.value="";
    }
    console.log(listaAmigos);


}

//Funcion para actualizar lista de amigos
function actualizarListaAmigos(){
    let lista=document.getElementById('listaAmigos');
}
actualizarListaAmigos();