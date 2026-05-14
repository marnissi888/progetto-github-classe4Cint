document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
 
    const form = document.getElementById('leadForm');
    const emailInput = document.getElementById('emailInput');
    const feedbackMessage = document.getElementById('feedbackMessage');
 
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!validateEmail(emailValue)) {
            showFeedback('Per favore, inserisci un indirizzo email valido.', 'error');
            return;
        }
 
        showFeedback('Grazie per esserti iscritto! Controlla la tua email per ricevere il codice sconto.', 'success');
        form.reset();
    });
 
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
 
    function showFeedback(message, type) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback-msg ${type}`;
        feedbackMessage.classList.remove('hidden');
    }
});