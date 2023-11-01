var ativos = 0;
function butao1()
{
    
    var btn = document.getElementById("botaoSc").style;
    var controle;
        if(btn.height < 101 || btn.height == (99 + "px"))
        {
            controle = 100;
            var int = setInterval(Anim, 1);   
            return;  
        }
        else if(btn.height == (1 + "px")){
            btn.display = "block";
            controle = 0;
            var inte = setInterval(AnimReverse, 1);
            return;
        }

            function Anim()
            {
                if(controle <= 50)
                {
                    document.getElementById("botaoSc").innerHTML = "";
                }
                if(controle == 0)
                {
                    btn.display = "none";
                    clearInterval(int);
                    int == null;
                    scrollar();
                    return;
                }
                btn.height = controle + "px";
                controle--; 
            }
            function AnimReverse()
            {
                if(controle == 50)
                {
                document.getElementById("botaoSc").innerHTML = "Vamos?";
                }
                if(controle == 100)
                {
                    clearInterval(inte);
                    int == null;
                    return;
                }
                btn.height = controle + "px";
                controle++; 
            }
}

function scrollar()
{
    let controle = window.scrollY;
    let A = setInterval(scol, 1);
    let B = setInterval(scol, 1);

        function scol()
        {
            if(controle == 680)
            {
                clearInterval(A);
                clearInterval(B);
                A = null;
                return;
            }
            scrollTo(0, controle)
            controle++;
            controle++;
        }
}


function TrianguloTam()
{
   let Bl = document.getElementById("triangulo").style;
   let Tp = document.getElementById("topPrincipal").style;

   Bl.borderTop = "130px solid #c57000";
   Bl.borderLeft = "130px solid transparent";
   Bl.borderRight = "130px solid transparent";

   Tp.height = 70 + "px";
   Tp.width = 70 + "px";

}
function TrianguloTim()
{
   let Bl = document.getElementById("triangulo").style;
   let Tp = document.getElementById("topPrincipal").style;

   Bl.borderTop = "100px solid #c57000";
   Bl.borderLeft = "100px solid transparent";
   Bl.borderRight = "100px solid transparent";

   Tp.height = 50 + "px";
   Tp.width = 50 + "px";

}

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
        if(window.scrollY < 647)
        {
            document.getElementById("topdiv").style.top = 658 + "px"; 
        }
    }



}


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