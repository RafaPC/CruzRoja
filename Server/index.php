<?php
$clase = new stdClass();
$idUser = (int) $_GET['idUser'];
$arrayUsers = ["antonio", "isaac", "valentin"];
if (!isset($arrayUsers[$idUser])) {
	$clase->nombre = "Not found";
	$clase->error = "Usuario no encontrado";
} else {
	$clase->nombre = $arrayUsers[$idUser];
}
$mensaje = json_encode($clase);
print($mensaje);
