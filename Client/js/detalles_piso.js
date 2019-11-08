$(function () {
	var id = window.localStorage.getItem("idPiso");
	$.ajax({
		type: "get",
		url: "http://localhost/HogarSolidario/CruzRoja/Server/centros.php",
		data: {
			id: id
		},
		dataType: "json",
		success: function (response) {
			var detalles_piso = response.detalles_piso;
			console.log(detalles_piso);
			$("#nombre").html(detalles_piso.nombre);
			$("#aforo").html(detalles_piso.aforo);
			$("#disponibilidad").html(detalles_piso.num_usuarios);
			$("#horario").html(detalles_piso.horario);
			$("#nvoluntarios").html(detalles_piso.num_voluntarios);

			if (detalles_piso.lavadora) {
				$("#lavadora").attr("src", "iconos/Lavadora.png");
			}
			if (detalles_piso.cocina == 1) {
				$("#cocina").attr("src", "iconos/Cocina.png");
			}
			if (detalles_piso.plancha == 1) {
				$("#plancha").attr("src", "iconos/Plancha.png");
			}
			if (detalles_piso.comida == 1) {
				$("#comida").attr("src", "iconos/Comida.png");
			}
			if (detalles_piso.ducha == 1) {
				$("#ducha").attr("src", "iconos/Ducha.png");
			}
			if (detalles_piso.movilidad == 1) {
				$("#movilidad").attr("src", "iconos/Movilidad.png");
			}
		},
		error: function (response) {
			alert("Error inesperado");
		}
	});
});