function showSection(id) {
    document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function register() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;

    if (!user || !pass) return alert("Completa los datos");

    let db = JSON.parse(localStorage.getItem('users')) || [];
    if (db.find(u => u.user === user)) return alert("Usuario ya existe");

    db.push({ user, pass });
    localStorage.setItem('users', JSON.stringify(db));
    alert("¡Registro exitoso!");
    showSection('login-section');
}

function login() {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;

    let db = JSON.parse(localStorage.getItem('users')) || [];
    const valid = db.find(u => u.user === user && u.pass === pass);

    if (valid) {
        renderBubbles();
        showSection('dashboard-section');
    } else {
        alert("Usuario o clave incorrecta");
    }
}

function renderBubbles() {
    const container = document.getElementById('bubble-container');
    let db = JSON.parse(localStorage.getItem('users')) || [];
    container.innerHTML = "";

    db.forEach(u => {
        const b = document.createElement('div');
        b.className = 'bubble';
        b.textContent = u.user.charAt(0).toUpperCase();
        b.setAttribute('data-name', u.user);
        container.appendChild(b);
    });
}