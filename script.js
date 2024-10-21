let users = [];
let messages = [];

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        users.push({ username, password });
        alert('تم إنشاء الحساب بنجاح!');
    } else {
        alert('يرجى إدخال جميع البيانات.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('loginDiv').style.display = 'none';
        document.getElementById('chatDiv').style.display = 'block';
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        messages.push(message);
        document.getElementById('message').value = '';
        displayMessages();
    }
}

function displayMessages() {
    const chat = document.getElementById('chat');
    chat.innerHTML = messages.map(msg => `<div>${msg}</div>`).join('');
}