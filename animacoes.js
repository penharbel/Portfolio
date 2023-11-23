/*---------------------------controle das animações----------------------------*/
var n = 1;
var dx = -2;
var pT = -10;
var Px = 170;
var Dx = -16;
var fogV = 2000;
var conE = -1;
var ES = "saida";
var btn_cc = false;
var controle_Círculo = 100;
var controle_Triângulo = 100;
var controleP = 0;

/*---------------------------Botão to scroll----------------------------*/
function butao1()
{
    let btn = document.getElementById("botaoSc").style;
    function btn_anim(){
        if(controle_Círculo <= 5){
            scrollN();
            controle_Círculo = 7;
            return;
        }else if(controle_Círculo >= 101){
            controle_Círculo = 100;
            pT = -2;
            btn_cc = false;
            return;
        }
        if(controle_Círculo <= 85){
            document.getElementById("botaoSc").innerHTML = "";
        }else if(controle_Círculo >= 85){
            document.getElementById("botaoSc").innerHTML = "Vamos?";
        }
        if(controle_Círculo <= 7){
            btn.display = "none";
        }else if(controle_Círculo >= 7){
            btn.display = "block";
        }
        btn.height = controle_Círculo + "px";
        btn.width = controle_Círculo + "px";
        controle_Círculo += pT;
        requestAnimationFrame(btn_anim);
    }
pT *= -1;
btn_anim();
btn_cc = true;
}

function scrollN(){
let controle = 0;
let dX = 2;
    function descer(){if(controle >= 700){
        return;
    }
    if(controle < 100){
        dX += 0.2;
    }else if(controle > 600){
        dX -= 0.2;
    }
    scrollTo(0, controle);
    controle += dX;
    requestAnimationFrame(descer);
    }
descer();
}

/*---------------------------triangulo-opções----------------------------*/
function TrianguloTam(){
let Tl = document.getElementById("triangulo").style;
let Tp = document.getElementById("topPrincipal").style;
    function trianguloAlm(){
        if(controle_Triângulo >= 126){
            controle_Triângulo = 125;
            return;
        }else if(controle_Triângulo <= 99){
            controle_Triângulo = 100;
            return;
        }
        Tp.height = (controle_Triângulo - 52) + "px";
        Tp.width = (controle_Triângulo - 52) + "px";
        Tl.borderTop = controle_Triângulo + "px solid #c57000";
        Tl.borderLeft = controle_Triângulo + "px solid transparent";
        Tl.borderRight = controle_Triângulo + "px solid transparent";
        controle_Triângulo += dx;
        requestAnimationFrame(trianguloAlm);
    }
dx *= -1;
trianguloAlm();
}

/*---------------------------triangulo responsivo----------------------------*/
function topdivS(){
if(window.scrollY > 630){
    let mov = window.scrollY;
    document.getElementById("topdiv").style.top = mov + "px";
}
if(window.scrollY < 658){
    document.getElementById("topdiv").style.top = 658 + "px"; 
}
requestAnimationFrame(topdivS);
}

/*---------------------------Animação para contatos----------------------------*/
function contatosAnim(){
    function Enter_Out(){
    let contato = document.getElementById("divImg" + n).style;
        if(controleP > Px && ES == "saida"){
            Px += 120;
            controleP = 0; 
            n += 1;
            Enter_Out();
            return;
        }else if(controleP <= 1 && ES == "entrada"){
            n -= 1;
            controleP = 170 + (120 * n - 110);
            Enter_Out();
            return;
        }
        if(n == 3 && controleP > 399 && ES == "saida"){
            n = 3;
            controleP = 170 + (120 * n - 110);
            ES = "entrada";
            controleP += 12;
            contato.top = controleP + "px";
            return;
        }else if(n <= 1 && controleP < 21 && ES == "entrada"){
            ES = "saida";
            n = 1;
            controleP = 0;
            Px = 170;
            contato.top = controleP + "px";
            return;
        }
    controleP += Dx;
    contato.top = controleP + "px";
    requestAnimationFrame(Enter_Out);
    }
Dx *= -1;
Enter_Out();
}

