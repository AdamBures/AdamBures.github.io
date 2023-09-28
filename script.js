window.addEventListener('load', function () {
    // Získání elementu s načítacím kolečkem
    var loadingCircle = document.querySelector('.lds-ring');
    // Získání elementu s obsahem stránky s grafem
    var content = document.querySelector('#content');

    // Inicializace Wavesurfer
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
    });

    // Načtení zvukového souboru
    wavesurfer.load('audio.mp3');

    // Po načtení Wavesurfer a zvukového souboru schovat animaci načítání
    wavesurfer.on('ready', function () {
        loadingCircle.style.display = 'none';
        content.style.display = 'block';

    });

    // Přidání funkcionality pro zoom in
    document.getElementById('zoom-in').addEventListener('click', function () {
        // Zobrazit zvukovou stopu, pokud není již zobrazena

        // Zoom in
        wavesurfer.zoom(5);
    });

    // Přidání funkcionality pro zoom out
    document.getElementById('zoom-out').addEventListener('click', function () {
        // Zobrazit zvukovou stopu, pokud není již zobrazena

        wavesurfer.zoom(-5);
    });

    // Aktualizace zobrazení aktuálního času
    wavesurfer.on('timeupdate', function (progress) {
        var formattedTime = formatTime(progress);
        console.log("formattedTime")
        document.getElementById('current-time').textContent = 'Aktuální čas: ' + formattedTime;
    });

    // Funkce pro formátování času do formátu "0:00"
    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        if (seconds < 10) {
            return minutes + ':0' + seconds;
        } else {
            return minutes + ':' + seconds;
        }
    }

});
