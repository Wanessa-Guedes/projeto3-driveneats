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
}

// TENTANDO FAZER O FECHAR O PEDIDO FUNCIONAR QUANDO OS TRÊS ESTÃO SELECIONADOS

    /*  var elem1 = document.getElementById('check1').style.display;
    var elem2 = document.getElementById('check2');
    var elem3 = document.getElementById('check3');

    var elem4 = document.getElementById('check4');
    var elem5 = document.getElementById('check5');
    var elem6 = document.getElementById('check6');

    var elem7 = document.getElementById('check7');
    var elem8 = document.getElementById('check8');
    var elem9 = document.getElementById('check9');

    var checkedOk; */
/*     
    if(elem1.style.display == "block" || elem2.style.display == "block" || elem3.style.display == "block" && elem4.style.display == "block" || elem5.style.display == "block" || elem6.style.display == "block" && elem7.style.display == "block" || elem8.style.display == "block" || elem9.style.display == "block" ){
    var checkedOk = 1;
    } */
    /*  console.log(elem1);

    if(elem1 == "block" ){
        checkedOk = 1;
    }
     */

// FUNÇÃO PARA FECHAR O PEDIDO

/* function botaofecharpedido(checkedOk){

    if(checkedOk === 1) {
        document.getElementById("h3").style.backgroundColor = "blue";
    }
} */