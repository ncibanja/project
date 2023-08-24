var btn=document.querySelector('#connect');
var mail=document.querySelector('#mail');


function verif(e) {
    verifMail();
}

function verifMail() {
    if(mail.value.indexOf('@')==-1)
    {
        document.getElementById('commentmail').innerHTML="mail ne contient pas de '@'";
        document.getElementById('commentmail').style.color='red';
    }
    else{
        document.getElementById('commentmail').innerHTML="  ";
        document.getElementById('commentmail').style.color='gray';
    }
}


btn.addEventListener('click',verif);