document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'; // API de Petstore
    // Hacer la petición AJAX
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json', // Esperamos recibir un JSON
        success: function(data) {
            llenarTabla(data);
        },
        error: function(error) {
            console.error("Error al obtener los datos:", error);
        }
    });

    // Función para llenar la tabla
    function llenarTabla(mascotas) {
        const table = $('#listadoMascotas'); // Obtener la tabla por su ID
        const tbody = table.find('tbody'); // Obtener el cuerpo de la tabla (tbody)
        tbody.empty(); // Limpiar la tabla antes de llenarla

        // Ordenar las mascotas por ID
        mascotas.sort((a, b) => a.id - b.id); // Ordenar en orden ascendente por ID

        // Recorrer las mascotas ordenadas
        mascotas.forEach(mascota => {
            const fila = `
                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <td class="w-16 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" id="id">
                        ${mascota.id || 'Sin ID'}
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full" src="${mascota.photoUrl || 'https://via.placeholder.com/200'}" alt="${mascota.name}" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold" id="nombre">${mascota.name || 'Sin nombre'}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${mascota.category ? mascota.category.name : 'Sin categoría'}
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            ${mascota.status || 'Sin estado'}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${new Date().toLocaleDateString()} <!-- Ejemplo de fecha -->
                    </td>
                </tr>
            `;
            tbody.append(fila); // Añadir la fila generada a la tabla
        });
    }

    // Ordenar por ID al hacer clic en el encabezado
    $('#idHeader').on('click', function() {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                llenarTabla(data); // Llenar la tabla nuevamente
            }
        });
    });
});
