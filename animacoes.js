/*---------------------------controle das animações----------------------------*/
var ativos = 0;
var trianguloAtv = 0;
var btn_cc = false;
var controle_global = 100;
var pT = -10;

/*---------------------------Botão to scroll----------------------------*/
function butao1()
{
    let btn = document.getElementById("botaoSc").style;
    function btn_anim()
    {
        if(controle_global <= 5 && btn_cc == false){
            scrollN();
            controle_global = 7;
            return;
        }else if(controle_global >= 100 && btn_cc == true){
            controle_global = 100;
            pT = -2;
            btn_cc = false;
            return;
        }
        if(controle_global <= 85 && btn_cc == false){
            document.getElementById("botaoSc").innerHTML = "";
        }else if(controle_global >= 85 && btn_cc == true){
            document.getElementById("botaoSc").innerHTML = "Vamos?";
        }
        if(controle_global <= 7 && btn_cc == false){
            btn.display = "none";
        }else if(controle_global >= 7 && btn_cc == true){
            btn.display = "block";
        }
        btn.height = controle_global + "px";
        btn.width = controle_global + "px";
        controle_global += pT;
        requestAnimationFrame(btn_anim);
    }
    if(btn_cc == false)
    {
        pT *= -1;
        btn_anim();
        btn_cc = true;
        return;
    }else if(btn_cc == true){
        pT *= -1;
        btn_anim();
        btn_cc = false;
        return;
    }
}
function scrollN()
{
    let controle = 0;
    descer();
    function descer() {
    if(controle >= 700)
    {
        return;
    }
    scrollTo(0, controle);
    controle += 12;
    requestAnimationFrame(descer);
    }
}

/*---------------------------triangulo-opções----------------------------*/
function TrianguloTam()
{
    if(trianguloAtv == 1)
    {
        return;
    }
   let Bl = document.getElementById("triangulo").style;
   let Tp = document.getElementById("topPrincipal").style;
   let controle = 100;

   let I = setInterval(trianguloAlm, 2)

        function trianguloAlm()
        {
            if(controle == 130)
            {
                clearInterval(I);
                trianguloAtv = 1;
                return;
            }
            Bl.borderTop = controle + "px solid #c57000";
            Bl.borderLeft = controle + "px solid transparent";
            Bl.borderRight = controle + "px solid transparent";
            if(controle < 120)
            {
                Tp.height = (controle - 52) + "px";
                Tp.width = (controle - 52) + "px";
            }
            controle++;
        }

}
function TrianguloTim()
{
   let Bl = document.getElementById("triangulo").style;
   let Tp = document.getElementById("topPrincipal").style;
   let controle = 130;

   let I = setInterval(trianguloDlm, 1);

    function trianguloDlm()
    {
        if(controle == 100)
        {
            clearInterval(I);
            trianguloAtv = 0;
            return;
        }
        Bl.borderTop = controle + "px solid #c57000";
        Bl.borderLeft = controle + "px solid transparent";
        Bl.borderRight = controle + "px solid transparent";
        if(controle > 110)
        {
            Tp.height = (controle - 60) + "px";
            Tp.width = (controle - 60) + "px";
        }
        controle--;
    }
}

/*---------------------------<div> do triangulo----------------------------*/
function topdivS()
{

var D = setInterval(acimaD, 1);
var E = setInterval(acimaD, 1);


    function acimaD()
    {
        if(window.scrollY > 630)
        {
            let mov = window.scrollY;

            document.getElementById("topdiv").style.top = mov + "px";

        }
        if(window.scrollY < 658)
        {
            document.getElementById("topdiv").style.top = 658 + "px"; 
        }
    }



}


/*---------------------------Animação para contatos----------------------------*/
function constroi()
{
    if(ativos == 0)
    {
        contatosE();
        return;
    }
    else{
        RB1();
        return;
    }
}
function contatosE()
{

    let controle = 0;
    let A = document.getElementById("divImg1").style;
    A.display = "flex";
    let F = setInterval(ani, 0.0000001);
    let G = setInterval(ani, 0.0000001);
        function ani()
        {
            if(controle > 180)
            {
                clearInterval(F);
                clearInterval(G);
                A = null;
                C2();
                return;
            }
            A.top = controle +"px"
            controle++;
            controle++;
        }
}
function C2()
{
    let controle = 0;
    let A = document.getElementById("divImg2").style;
    A.display = "flex";
    let F = setInterval(ani, 0.0000001);
    let G = setInterval(ani, 0.0000001);
        function ani()
        {
            if(controle > 280)
            {
                clearInterval(F);
                clearInterval(G);
                C3();
                return;
            }
            A.top = controle +"px"
            controle++;
            controle++;
        }
}
function C3()
{
    let controle = 0
    let A = document.getElementById("divImg3").style;
    A.display = "flex";
    let F = setInterval(ani, 0.0000001);
    let G = setInterval(ani, 0.0000001);
        function ani()
        {
            if(controle > 380)
            {
                clearInterval(F);
                clearInterval(G);
                ativos = 1;
                return;
            }
            A.top = controle +"px"
            controle++;
            controle++;
        }
}
function RB1()
{
    let controle = 180;
    let A = document.getElementById("divImg1").style
    let G = setInterval(Anm1, 1);
    let H = setInterval(Anm1, 1);

    function Anm1()
    {
        if(controle == 0)
        {
            clearInterval(G);
            clearInterval(H);
            RB2();
            return;
        }
        A.top = controle + "px";
        controle--;
        controle--;
    }

}
function RB2()
{
    let controle = 280;
    let A = document.getElementById("divImg2").style
    let G = setInterval(Anm1, 1);
    let H = setInterval(Anm1, 1);

    function Anm1()
    {
        if(controle == 0)
        {
            clearInterval(G);
            clearInterval(H);
            RB3();
            return;
        }
        A.top = controle + "px";
        controle--;
        controle--;
    }

}
function RB3()
{
    let controle = 380;
    let A = document.getElementById("divImg3").style
    let G = setInterval(Anm1, 1);
    let H = setInterval(Anm1, 1);

    function Anm1()
    {
        if(controle == 0)
        {
            clearInterval(G);
            clearInterval(H);
            atv();
            return;
        }
        A.top = controle + "px";
        controle--;
        controle--;
    }

}

function atv()
{
    ativos = 0;
}

/*---------------------------Animação para as tecnologias----------------------------*/
function animacaoTec()
{

}