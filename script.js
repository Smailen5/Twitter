$(document).ready(() => {

    // mi son dimenticato il title, lo aggiungo cosi
    $('a .fa-ellipsis').attr('title', 'Altro').addClass('tooltip');
    // Attiva Tooltipster, thema di default va bene
    $('.tooltip').tooltipster();
    $('.cnt-aside > *').addClass('icon');

    // Nasconde tutti classe tendenze dopo il settimo figlio e li fa apparire al click del link
    $('.tendenze:gt(3)').addClass('hidden');
    $('#show').click(function () {
        $('.tendenze:gt(7)').slideToggle("hidden");
        // Cambia il testo del link "Mostra altro" in "Mostra meno" al click
        if ($(this).text() === 'Mostra altro') {
            $(this).text('Mostra meno');
        } else {
            $(this).text('Mostra altro');
        }
    });

    // Funzione per gestire il popup
    $('.tendenze, #btn-setting,  .icon, .error').click(function () {
        // Se ha class error
        if ($(this).hasClass('error')) {
            $('#alert-pnt').removeClass('hidden');
            return (false);
        } else {
            // Se non ha class error
            $('#alert').removeClass('hidden');
        }
    });
    // Il bottone meglio metterlo fuori dalla funzione popup
    $('.close-btn').click(function () {
        $('#alert, #alert-pnt').addClass('hidden');
    });

    // Variabili con ciclo for per gestire tutti i figli del div id back-ctn-log per rimuovere tutte le classi hidden
    var backLog = document.querySelector("#back-ctn-log");
    var children = backLog.querySelectorAll("*");
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("hidden");
    }
    // Gestisce il click al bottone Login
    document.querySelector("#login-btn").addEventListener("click", function () {
        document.querySelector("#back-ctn-log").classList.remove("hidden");
    });

    // Variabili con ciclo for per gestire tutti i figli del div id back-ctn-reg per rimuovere tutte le classi hidden
    var backReg = document.querySelector("#back-ctn-reg");
    var children = backReg.querySelectorAll("*");
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("hidden");
    }
    // Gestisce il click del bottone Iscriviti
    document.querySelector("#register-btn").addEventListener("click", function () {
        document.querySelector("#back-ctn-reg").classList.remove("hidden");
    });
    // X close per chiudere il form
    $('.material-symbols-outlined').click(function () {
        var regForm = $('#back-ctn-reg');
        var logForm = $('#back-ctn-log');
        // If per X close per form registrazione
        if (!regForm.hasClass('hidden')) {
            regForm.addClass('hidden');
        }
        // If per X close per form accedi
        if (!logForm.hasClass('hidden')) {
            logForm.addClass('hidden');
        }
    });













});
