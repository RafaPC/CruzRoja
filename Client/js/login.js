function llamada() {
	var login = $("#login").val();
	var password = $("#password").val();
	if (login && password) {
		$.ajax({
			type: "get",
			url: "http://localhost/HogarSolidario/CruzRoja/Server/login.php",
			data: {
				"login": login,
				"password": password
			},
			dataType: "json",
			success: function (response) {
				if (response.tipo) {
					window.localStorage.setItem('tipo', "" + response.tipo);
					location.href = "https://localhost/HogarSolidario/CruzRoja/Client/mapa_pisos.html";
				} else {
					if (response.error == -1) {
						alert("Necesitas rellenar los campos");
					} else {
						alert("Usuario o contraseña incorrectos");
					}
				}
			},
			error: function (response, xhttpError) {
				alert("Error inesperado");
			},
		});
	} else {
		alert("Rellena los campos");
	}
}