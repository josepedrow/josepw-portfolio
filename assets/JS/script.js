//Pega o botão
mybutton = document.getElementById("btn-scroll-up");

// Mostra o botão se scroll > 800 px
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Sobe depois do clique do usuário
function retornaAoTopo() {
    document.body.scrollTop = 0; //  Safari
    document.documentElement.scrollTop = 0; //  Chrome, Firefox, IE and Opera
}

//ADAPTADO DE https://www.w3schools.com/howto/howto_js_scroll_to_top.asp