
    const text = document.getElementById('text');
    const mensajes = document.getElementById('mensajes');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (text.value.trim() === '') {
            alert('Debe tener información.');
            console.log('El campo de mensaje está vacío.');
            return;
        }
        const parrafo = document.createElement("p");
        parrafo.textContent = text.value;
        mensajes.appendChild(parrafo);
    });


