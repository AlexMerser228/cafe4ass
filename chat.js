document.getElementById('chatButton').addEventListener('click', function() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatWindow').style.display = 'none';
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('chatInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('chat-message');
        messageContainer.textContent = messageText;

        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(messageContainer);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Прокручуємо вниз
    }
});

document.getElementById('chatInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('sendMessage').click();
    }
});
