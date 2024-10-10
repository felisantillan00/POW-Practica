$(document).ready(function () {
    // Inicializa DataTable
    let table = $('#datatablesSimple').DataTable();

    // Llama a la API para obtener los datos
    $.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available', function(data) {
        // Limpia los datos previos de la tabla
        table.clear();

        // Añade las filas con los datos obtenidos
        data.forEach(pet => {
            const category = pet.category ? pet.category.name : 'Sin categoría';
            const row = [
                pet.id,
                pet.name,
                category,  // Extraemos el nombre de la categoría
                pet.status,
                new Date().toLocaleDateString()  // Fecha actual
            ];

            table.row.add(row);  // Añade las nuevas filas a la tabla
        });

        // Redibuja la tabla con los nuevos datos
        table.draw();
    });
});
