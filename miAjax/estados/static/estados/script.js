$(document).ready(function() {
    $('#estado').change(function() {
        var estadoId = $(this).val();
        if (estadoId) {
            $.ajax({
                url: '/cargar-municipios/',
                data: {
                    'estado_id': estadoId
                },
                success: function(data) {
                    var municipioSelect = $('#municipio');
                    municipioSelect.empty();
                    municipioSelect.append('<option value="">Selecciona un municipio</option>');
                    $.each(data, function(index, municipio) {
                        municipioSelect.append('<option value="' + municipio.id + '">' + municipio.nombre + '</option>');
                    });
                }
            });
        } else {
            $('#municipio').empty();
            $('#municipio').append('<option value="">Selecciona un estado primero</option>');
        }
    });
});
