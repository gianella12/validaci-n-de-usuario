const basesDeDatos = [
    { nombre: "Juan44", contraseña: "juancarlos123" },
    { nombre: "Sofia@gmail.com", contraseña: "sofia1234" },
    { nombre: "MatiasSopla@gmail.com", contraseña: "riverelmejor" },
    { nombre: "Fredoorlando@gmail.com", contraseña: "bocabocaa" },
    { nombre: "Julianmatias12@gmail.com", contraseña: "panpan123" }
];

const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (event) => {
    event.preventDefault()


    const NombreDeUsuario = document.getElementById("nombre-de-usuario").value;
    const contrasennaDeUsuario = document.getElementById("contrasenna-de-usuario").value;


    const existeElUsuario = basesDeDatos.find(
        usuario => usuario.nombre === NombreDeUsuario && usuario.contraseña === contrasennaDeUsuario);

    if (existeElUsuario) {
        alert(`Bienvenido a tu cuenta ${existeElUsuario.nombre}`);

    } else {
        alert("No encontramos tu usuario. Verifica el nombre de usuario o contraseña");
    }
});
 
const inputContrasenna = document.getElementById("contrasenna-de-usuario");
const botonVerContrasenna = document.getElementById("ver-contrasenna");

botonVerContrasenna.addEventListener('click', (event) => {
    event.preventDefault();
    
    const esPassword = inputContrasenna.type === 'password';
    inputContrasenna.type = esPassword ? 'text' : 'password';
    botonVerContrasenna.textContent = esPassword ? '🤫' : '👀';
  });
