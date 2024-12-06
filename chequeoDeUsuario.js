const basesDeDatos = [
    { nombre: "Juan44", contraseña: "juancarlos123" }
];
 
const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (event) => {
event.preventDefault()


const NombreDeUsuario = document.getElementById("nombre-de-usuario").value;
const contraseñaDeUsuario = document.getElementById("contraseña-de-usuario").value;


const existeElUsuario = basesDeDatos.some( usuario => usuario.nombre === NombreDeUsuario &&  usuario.contraseña === contraseñaDeUsuario);

console.log(existeElUsuario);
});

   
