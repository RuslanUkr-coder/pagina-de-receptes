function night() {
    document.body.classList.add('night-mode');
    document.querySelectorAll('.difrec').forEach(div => {
        div.classList.add('night-mode');
    });
    document.querySelectorAll('#DNbuttons button, #DNbuttons a').forEach(button => {
        button.classList.add('night-mode');
    });
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('night-mode');
    });
    document.querySelectorAll('h1, p').forEach(element => {
        element.classList.add('night-mode');
    });
    document.querySelectorAll('.pasos').forEach(pasos => {
        pasos.classList.add('night-mode');
    });
}

function day() {
    document.body.classList.remove('night-mode');
    document.querySelectorAll('.difrec').forEach(div => {
        div.classList.remove('night-mode');
    });
    document.querySelectorAll('#DNbuttons button, #DNbuttons a').forEach(button => {
        button.classList.remove('night-mode');
    });
    document.querySelectorAll('img').forEach(img => {
        img.classList.remove('night-mode');
    });
    document.querySelectorAll('h1, p').forEach(element => {
        element.classList.remove('night-mode');
    });
    document.querySelectorAll('.pasos').forEach(pasos => {
        pasos.classList.remove('night-mode');
    });
}