var prenom=document.querySelector('#prenom');
var nom=document.querySelector('#nom')
var btn=document.querySelector('#inscrire')
var mail=document.querySelector('#mail')


function checkM() {
    if (document.getElementById('Mme').checked==true)
    {
        document.getElementById('M').checked=false;
    }
}
function checkMme() {
    if (document.getElementById('M').checked==true)
    {
        document.getElementById('Mme').checked=false;
    }
}

function verif(e) {
    verifNom();
    verifprenom();
    verifMail();
}

function verifMail() {
    if (mail.value.indexOf('@')==-1)
    {
        document.getElementById('commentmail').innerHTML="votre mail ne contient pas <<@>> "
        document.getElementById('commentmail').style.color='red'
    }
    else{
        document.getElementById('commentmail').innerHTML=" "
        document.getElementById('commentmail').style.color='gray'
    }
}

function verifNom() {
    if (/^[a-zA-Z .]+$/.test(nom.value)==false)
    {
        document.getElementById('commentnom').style.color='red';
    }
    else{
        document.getElementById('commentnom').style.color='gray'
    }
}
function verifprenom() {
    if (/^[a-zA-Z .]+$/.test(prenom.value)==false)
    {
        document.getElementById('commentprenom').style.color='red';
    }
    else{
        document.getElementById('commentprenom').style.color='gray'
    }
}

btn.addEventListener('click',verif)