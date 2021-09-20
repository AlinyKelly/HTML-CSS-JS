/** Função para exibir uma mensagem de confirmação */
function clicou(){
    //document.getElementById("agradecimento").innerHTML = "<b>Fique atento, em breve um de nossos atendentes irá entrar em contato para confirmar sua consulta.</b>";
    alert("Aguarde! Estamos iniciando o seu aplicativo de e-mail. Fique atento, em breve um de nossos atendentes irá entrar em contato para confirmar sua consulta.");
}


/*Função para exibir o valor da consulta */
function funcaoChange(elemento){
    var especialidade = (elemento.value);

    if (especialidade == 1){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 180,00 <br>";
    } else if (especialidade == 2){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 100,00 <br>";
    } else if (especialidade == 3){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 180,00 <br>";
    } else if (especialidade == 4){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 100,00 <br>";
    } else if (especialidade == 5){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 150,00 <br>";
    } else if (especialidade == 6){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 80,00 <br>";
    } else if (especialidade == 7){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 100,00 <br>";
    } else if (especialidade == 8){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 90,00 <br>";
    } else if (especialidade == 9){
        document.getElementById("resultado").innerHTML = "Consulta: R$ 120,00 <br>";
    }
}