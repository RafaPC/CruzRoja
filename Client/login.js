function llamada() {
	var login = $("#login").val();
	var password = $("#password").val();
	if (login && password) {
		$.ajax({
			type: "post",
			url: "http://localhost/HogarSolidario/CruzRoja/Server/login.php",
			data: {
				"login": login,
				"password": password
			},
			dataType: "json",
			success: function (response) {
				if (response.error == 1) {
					location.href = "https://www.google.es";
				} else {
					alert("Usuario o contraseña incorrectos");
				}
			},
			error: function (response, xhttpError) {
				alert("Error");
			},
			complete: function (response, xhttpError) {
				alert("Hacerlo lo ha hecho");
				console.log(xhttpError);
				console.log(response);
			}
		});
	} else {
		alert("Rellena los campos");
	}
}