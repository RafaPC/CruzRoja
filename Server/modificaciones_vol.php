<?php

if(isset($_GET['id'])){
    require_once('conexion_server.php');
    $new_conexion = new ConexionBD();
    $conex = $new_conexion->getConex();
    $id = $_GET['id'];
    $num_usuarios = $GET['num_usuarios'];
    $num_voluntarios = $GET['num_voluntarios'];
    $horario = $GET['horario'];
    $lavadora = $GET['lavadora'];
    $plancha = $GET['plancha'];
    $ducha = $GET['ducha'];
    $cocina = $GET['cocina'];
    $comida = $GET['comida'];
    $accesibilidad = $GET['accesibilidad']
    $resultado = $conex->query("SELECT * FROM `piso` WHERE `id` ='$id'");
    $sql = "UPDATE `piso` SET `num_usuarios`= $num_usuarios, `num_voluntarios`= $num_voluntarios, `horario` = $horario, `lavadora` = $lavadora, 
    `plancha` = $plancha, `ducha` = $ducha, `cocina` = $cocina, `comida` = $comida, `accesibilidad` = $accesibilidad WHERE `id` = $id";
    if (($conexion->query($sql))){
        die("{error: 1}");
    }
    else{
        die("{error: -2}");
    }
}else{
    die("{error:-1}");
}

?>