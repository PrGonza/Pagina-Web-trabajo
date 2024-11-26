
const chatbox = document.getElementById("chatbox");

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message) {
        // Mostrar mensaje del usuario
        chatbox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;

        // Respuesta automática básica
        let response = "";
        if (message.toLowerCase().includes("hola")) {
            response = "¡Hola! ¿En qué puedo ayudarte hoy?";
        } else if (message.toLowerCase().includes("productos")) {
            response = "Contamos con una amplia gama de productos. ¿Qué estás buscando en específico?";
        } else {
            response = "Soy un asistente automático y haré lo posible por ayudarte. Por favor, sé específico.";
        }

        chatbox.innerHTML += `<p><strong>IA:</strong> ${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
        userInput.value = "";
    }
}
