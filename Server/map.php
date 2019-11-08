<?php

if(isset($_GET['ciudad'])){
    require_once('conexion_server.php');
    $new_conexion = new ConexionBD();
    $conex = $new_conexion->getConex();
    $ciudad = $_GET['ciudad'];
    $resultado = $conex->query("SELECT (`id`, `direccion`, `atitud`, `longitud`) FROM `piso` WHERE `ciudad` ='$ciudad'");
    $temp = $resultado->fetch_all(MYSQLI_ASSOC);
    var_dump($temp);
    if (!sizeof($temp)){
        die("{error:-2}");
    }
    else{
        die("{error: 1}");
    }
}else{
    die("{error:-1}");
}

?>