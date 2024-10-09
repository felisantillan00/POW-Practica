const estadoSpan = document.getElementById('estado');
estadoSpan.addEventListener('click', () => {
    if (estadoSpan.textContent === 'Habilitado') {
        estadoSpan.textContent = 'Deshabilitado';
        estadoSpan.classList.remove('bg-gray-200', 'text-gray-800');
        estadoSpan.classList.add('bg-red-200', 'text-red-800'); // Cambia el color si está deshabilitado
    } else {
        estadoSpan.textContent = 'Habilitado';
        estadoSpan.classList.remove('bg-red-200', 'text-red-800');
        estadoSpan.classList.add('bg-gray-200', 'text-gray-800'); // Cambia el color si está habilitado
    }
});

document.getElementById('mascotaForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const especie = document.getElementById('especie').value;
    const edad = document.getElementById('edad').value;
    const tag = document.getElementById('tag').value;
    const raza = document.getElementById('raza').value;
    const estado = document.getElementById('estado').textContent; // Obtener el estado actual

    // Validar campos requeridos
    if (!id || !nombre || !especie || !edad) {
        alert('Por favor, complete todos los campos obligatorios.');
        return; // Salir de la función si falta información
    }

    const nuevaMascota = {
        id,
        nombre,
        especie,
        edad,
        tag,
        raza,
        estado // Incluir el estado en el objeto
    };

    try {
        const response = await fetch('https://petstore.swagger.io/v2/pet/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaMascota)
        });
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const data = await response.json();
        console.log('Mascota Creada: ', data);
        alert('Mascota creada exitosamente');
        // Resetear formulario
        document.getElementById('mascotaForm').reset();
        document.getElementById('estado').textContent = 'Habilitado'; // Resetear el estado
        document.getElementById('estado').classList.remove('bg-red-200', 'text-red-800');
        document.getElementById('estado').classList.add('bg-gray-200', 'text-gray-800');
    } catch (error) {
        console.error('Error: ', error);
        alert('Hubo un error al crear la mascota');
    }
});
