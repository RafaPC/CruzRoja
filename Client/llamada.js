function llamada() {
	var idUser = $("#idUser").val();
	$.ajax({
		type: "get",
		url: "http://localhost/HogarSolidario/Server/index.php",
		data: {
			"idUser": idUser
		},
		dataType: "json",
		success: function (response) {
			alert("Éxito");
			alert(response.nombre);
			if (response.error) {
				alert(response.error);
			}
		},
		error: function (response, xhttpError) {
			alert("Error");
		},
		complete: function (response, xhttpError) {
			alert("Hacerlo lo ha hecho");
			console.log(xhttpError);
		}
	});
}