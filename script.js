// VINCULANDO NOMES AOS PRATOS

var prato1 = document.getElementById("nomePrato1").innerHTML; 
var preco1 = document.getElementById("precoPrato1").innerHTML;

var prato2 = document.getElementById("nomePrato2").innerHTML; 
var preco2 = document.getElementById("precoPrato2").innerHTML;

var prato3 = document.getElementById("nomePrato3").innerHTML; 
var preco3 = document.getElementById("precoPrato3").innerHTML;

// VINCULANDO NOMES AS BEBIDAS

var bebida1 = document.getElementById("nomeBebida1").innerHTML; 
var preco4 = document.getElementById("precoBebida1").innerHTML;

var bebida2 = document.getElementById("nomeBebida2").innerHTML; 
var preco5 = document.getElementById("precoBebida2").innerHTML;

var bebida3 = document.getElementById("nomeBebida3").innerHTML; 
var preco6 = document.getElementById("precoBebida3").innerHTML;

// VINCULANDO NOMES AS SOBREMESAS

var sobremesa1 = document.getElementById("nomeSobremesa1").innerHTML; 
var preco7 = document.getElementById("precoSobremesa1").innerHTML;

var sobremesa2 = document.getElementById("nomeSobremesa2").innerHTML; 
var preco8 = document.getElementById("precoSobremesa2").innerHTML;

var sobremesa3 = document.getElementById("nomeSobremesa3").innerHTML; 
var preco9 = document.getElementById("precoSobremesa3").innerHTML;

// FUNÇÕES PARA SELECIONAR SOMENTE UMA COMIDA
function escolherComida1(){
    document.getElementById("escolhaComida1").style.border = "2px solid green";
    document.getElementById("escolhaComida1").style.borderRadius = "9px";
    document.getElementById("check1").style.display = "block";

    document.getElementById("escolhaComida2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida2").style.borderRadius = "9px";
    document.getElementById("check2").style.display = "none";

    document.getElementById("escolhaComida3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida3").style.borderRadius = "9px";
    document.getElementById("check3").style.display = "none";

    document.getElementById("pratoEscolhido").innerHTML = prato1;
    document.getElementById("precoPratoEscolhido").innerHTML = preco1;

    checarPedidos();
}

function escolherComida2(){
    document.getElementById("escolhaComida2").style.border = "2px solid green";
    document.getElementById("escolhaComida2").style.borderRadius = "5px";
    document.getElementById("check2").style.display = "block";

    document.getElementById("escolhaComida1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida1").style.borderRadius = "9px";
    document.getElementById("check1").style.display = "none";

    document.getElementById("escolhaComida3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida3").style.borderRadius = "9px";
    document.getElementById("check3").style.display = "none";

    checarPedidos();
}

function escolherComida3(){
    document.getElementById("escolhaComida3").style.border = "2px solid green";
    document.getElementById("escolhaComida3").style.borderRadius = "5px";
    document.getElementById("check3").style.display = "block";

    document.getElementById("escolhaComida1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida1").style.borderRadius = "9px";
    document.getElementById("check1").style.display = "none";

    document.getElementById("escolhaComida2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaComida2").style.borderRadius = "9px";
    document.getElementById("check2").style.display = "none";

    checarPedidos();
}

// FUNÇÕES PARA SELECIONAR SOMENTE UMA BEBIDA
function escolherBebida1(){
    document.getElementById("escolhaBebida1").style.border = "2px solid green";
    document.getElementById("escolhaBebida1").style.borderRadius = "9px";
    document.getElementById("check4").style.display = "block";

    document.getElementById("escolhaBebida2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida2").style.borderRadius = "9px";
    document.getElementById("check5").style.display = "none";

    document.getElementById("escolhaBebida3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida3").style.borderRadius = "9px";
    document.getElementById("check6").style.display = "none";

    checarPedidos();
}

function escolherBebida2(){
    document.getElementById("escolhaBebida2").style.border = "2px solid green";
    document.getElementById("escolhaBebida2").style.borderRadius = "5px";
    document.getElementById("check5").style.display = "block";

    document.getElementById("escolhaBebida1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida1").style.borderRadius = "9px";
    document.getElementById("check4").style.display = "none";

    document.getElementById("escolhaBebida3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida3").style.borderRadius = "9px";
    document.getElementById("check6").style.display = "none";

    checarPedidos();
}

function escolherBebida3(){
    document.getElementById("escolhaBebida3").style.border = "2px solid green";
    document.getElementById("escolhaBebida3").style.borderRadius = "5px";
    document.getElementById("check6").style.display = "block";

    document.getElementById("escolhaBebida1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida1").style.borderRadius = "9px";
    document.getElementById("check4").style.display = "none";

    document.getElementById("escolhaBebida2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaBebida2").style.borderRadius = "9px";
    document.getElementById("check5").style.display = "none";

    checarPedidos();
}

// FUNÇÕES PARA SELECIONAR SOMENTE UMA SOBREMESA
function escolherSobremesa1(){
    document.getElementById("escolhaSobremesa1").style.border = "2px solid green";
    document.getElementById("escolhaSobremesa1").style.borderRadius = "9px";
    document.getElementById("check7").style.display = "block";

    document.getElementById("escolhaSobremesa2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa2").style.borderRadius = "9px";
    document.getElementById("check8").style.display = "none";

    document.getElementById("escolhaSobremesa3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa3").style.borderRadius = "9px";
    document.getElementById("check9").style.display = "none";

    checarPedidos();
}

function escolherSobremesa2(){
    document.getElementById("escolhaSobremesa2").style.border = "2px solid green";
    document.getElementById("escolhaSobremesa2").style.borderRadius = "5px";
    document.getElementById("check8").style.display = "block";

    document.getElementById("escolhaSobremesa1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa1").style.borderRadius = "9px";
    document.getElementById("check7").style.display = "none";

    document.getElementById("escolhaSobremesa3").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa3").style.borderRadius = "9px";
    document.getElementById("check9").style.display = "none";

    checarPedidos();
}

function escolherSobremesa3(){
    document.getElementById("escolhaSobremesa3").style.border = "2px solid green";
    document.getElementById("escolhaSobremesa3").style.borderRadius = "5px";
    document.getElementById("check9").style.display = "block";

    document.getElementById("escolhaSobremesa1").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa1").style.borderRadius = "9px";
    document.getElementById("check7").style.display = "none";

    document.getElementById("escolhaSobremesa2").style.border = "2px solid #FFFFFF";
    document.getElementById("escolhaSobremesa2").style.borderRadius = "9px";
    document.getElementById("check8").style.display = "none";
    
    checarPedidos();
}

// FECHAR O PEDIDO 

function checarPedidos(){
    var elem1 = document.getElementById('check1');
    var elem2 = document.getElementById('check2');
    var elem3 = document.getElementById('check3');

    var elem4 = document.getElementById('check4');
    var elem5 = document.getElementById('check5');
    var elem6 = document.getElementById('check6');

    var elem7 = document.getElementById('check7');
    var elem8 = document.getElementById('check8');
    var elem9 = document.getElementById('check9');

    var checkedOk = 0; 

    if(elem1.style.display == "block" || elem2.style.display == "block" || elem3.style.display == "block"){
            checkedOk += 1;
        } 

    if(elem4.style.display == "block" || elem5.style.display == "block" || elem6.style.display == "block"){
            checkedOk += 1;
        } 

    if(elem7.style.display == "block" || elem8.style.display == "block" || elem9.style.display == "block"){
            checkedOk += 1;
        } 

    botaofecharpedido(checkedOk);
}

// FUNÇÃO PARA FECHAR O PEDIDO E ABRIR OUTRA TELA

function botaofecharpedido(checkedOk){

    if(checkedOk >= 3) {
        document.getElementById("bb").style.display= "flex";
        document.getElementById("bb").style.backgroundColor = "#32B72F";
        document.getElementById("h3").style.display= "none";
    }
}

function confirmaDados(){
    document.getElementById("idHeader").style.opacity = "0.5";
    document.getElementById("idPratos").style.opacity = "0.5";
    document.getElementById("idBebidas").style.opacity = "0.5";
    document.getElementById("idSobremesas").style.opacity = "0.5";
    document.getElementById("idBarraBottom").style.opacity = "0.5";
    document.getElementById("blocoPedidoFinal").style.display = "flex";
}