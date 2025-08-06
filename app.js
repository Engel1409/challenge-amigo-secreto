// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre =input.value.trim();


    if (!nombre){
        //alert ("Ingrese un nombre valido");
        //implementando alertas con sweetalert2
        Swal.fire({
        icon: 'warning',
        title: 'Nombre inválido',
        text: 'Ingrese un nombre válido',
        confirmButtonText: 'Entendido'
        });
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        //alert("El nombre solo debe contener letras");

        Swal.fire({
        icon: 'error',
        title: 'Solo letras',
        text: 'El nombre solo debe contener letras',
        confirmButtonText: 'Ok'
        });
        return;
    }

    const yaExiste = amigos.some(a => a.toLowerCase() === nombre.toLowerCase());
    if (yaExiste) {
        // alert("El nombre ya fue ingresado");
        Swal.fire({
        icon: 'info',
        title: 'Nombre repetido',
        text: 'El nombre ya fue ingresado',
        confirmButtonText: 'Entiendo'
        });
        return;
    }

    amigos.push(nombre);
    input.value ="";

    MostrarAmigos();
}

function detectarEnter(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
}

function MostrarAmigos() {
    const lista = document.getElementById ("listaAmigos");
    lista.innerHTML ="";

    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent= nombre.toUpperCase();
        lista.appendChild(li);
    })
    
}

function sortearAmigo(){
    if (amigos.length === 1 ){
        //alert ("Necesitas al 2 personas para el sorteo");
        Swal.fire({
        icon: 'info',
        title: 'importante',
        text: 'Necesitas 2 personas para el sorteo',
        confirmButtonText: 'Entiendo'
        });
        return;
    }

    const indice = Math.floor(Math.random()*amigos.length);
    const elegido = amigos[indice];

    // muestra resultado en pantalla
    document.getElementById("resultado");
    resultado.textContent=`el amigo secreto es: 🎁 ${elegido} 🎁`;

    // Esperar 5 segundos y luego reiniciar todo
    setTimeout(() => {
        amigos.length = 0; // Vaciar el array
        resultado.textContent = ""; // Limpiar resultado
        document.getElementById("resultado").value = ""; // Limpiar input
        document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista del DOM si la tienes
        document.getAnimations("#li").innerHTML=""; // limpiar li
    }, 5000);

    

}
