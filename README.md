# Proyecto Amigo Secreto
🎁 Sorteo de Amigo Secreto

Este proyecto tiene como principal objetivo fortalecer habilidades en lógica de programación, mediante la creación de una sencilla aplicación web para realizar un sorteo de amigo secreto.

🚀 Funcionalidad

Permite ingresar nombres válidos (solo letras y espacios).

Evita duplicados.

Muestra en pantalla la lista de nombres ingresados.

Realiza un sorteo aleatorio entre los participantes.

Muestra al azar quién fue seleccionado como "el amigo secreto".

Luego de 5 segundos, reinicia todo automáticamente para permitir un nuevo sorteo.


🧠 Lógica del Código

Se valida que el nombre:

No esté vacío.

Contenga solo letras y espacios.

No esté repetido.


Al presionar Enter o hacer clic en el botón, se agrega el nombre a la lista.

El sorteo selecciona un nombre aleatorio de la lista.

Se reinicia todo después del sorteo para empezar de nuevo.


📁 Estructura del Proyecto

const amigos = []; // Almacena los nombres ingresados

function agregarAmigo() { ... } // Valida y agrega el nombre

function detectarEnter(event) { ... } // Permite agregar con Enter

function MostrarAmigos() { ... } // Muestra los nombres en el DOM

function sortearAmigo() { ... } // Realiza el sorteo y reinicia

🛠️ Mejoras sugeridas

Validar que haya mínimo 2 personas antes de sortear (actualmente valida que haya al menos 1).

Estilo visual con CSS para mejorar experiencia de usuario.

Permitir exportar resultados o historial de sorteos (opcional).


✅ Requisitos

Navegador web moderno (no requiere instalación).

HTML y JavaScript.
