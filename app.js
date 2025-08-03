// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const amigo =input.value.trim();
    console.log (amigo)

    if (amigo === ""){
        alert ("Ingrese un nombre valido");
        return;
    }

    if (amigos.includes(amigo)){
        alert ("Nombre ya fue ingresado");
        return;
    }
    amigos.push(amigo);
    input.value ="";

    MostrarAmigos();
}
function MostrarAmigos() {
    const lista = document.getElementById ("listaAmigos");
    lista.innerHTML ="";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent= amigo;
        lista.appendChild(li);
    })
    
}

function sortearAmigo(){
    if (amigos.length === 0 ){
        alert ("Necesitas al 2 personas para el sorteo");
        return;
    }

    const indice = Math.floor(Math.random()*amigos.length);
    const elegido = amigos[indice];
    document.getElementById("resultado").textContent=`el amigo secreto es: 🎁 ${elegido} 🎁`;
}
