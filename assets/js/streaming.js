
const sendBtn = document.getElementById('sendBtn');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

function addMessage(text, from = 'Tú') {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${from}:</strong> ${text}`;
    messages.appendChild(p);
    messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text);
    input.value = '';

    // Respuesta automática simulada
    setTimeout(() => addMessage('Gracias por tu mensaje 💫', 'Lector'), 1000);
});

input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
    }
});
