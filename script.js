document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.getElementById('body');
    const currentTheme = localStorage.getItem('theme');
    const icon = themeToggle.querySelector('svg'); // Pobierz ikonę SVG tutaj

    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        // Ustaw ikonę na słońce, jeśli motyw jest ciemny przy załadowaniu
        icon.classList.remove('moon');
        icon.classList.add('sun');
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    } else {
        // Upewnij się, że ikona jest ustawiona na księżyc, jeśli motyw jest jasny (lub nieustawiony)
        icon.classList.remove('sun');
        icon.classList.add('moon');
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Zmień ikonę w zależności od motywu po kliknięciu
        if (isDark) {
            icon.classList.remove('moon');
            icon.classList.add('sun');
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        } else {
            icon.classList.remove('sun');
            icon.classList.add('moon');
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        }
    });
});

function login(){
    let log = document.getElementById("login");
    log.style.display = "block"
}

// Funkcja Logowanie
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza

        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;

        // Prosta demonstracja - bez prawdziwej weryfikacji serwera
        if (password === '5305') {
            messageDiv.textContent = 'Logowanie pomyślne!';
            messageDiv.className = 'message success';
            // Możesz tutaj przekierować użytkownika na inną stronę
            window.location.href = 'admin.html';
        } else {
            messageDiv.textContent = 'Nieprawidłowe hasło.';
            messageDiv.className = 'message error';
        }
    });
});