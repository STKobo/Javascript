var btnradio = document.getElementsByName('gender')
for (var count=0; count<btnradio.length; count++) {
    btnradio[count].addEventListener('change', (event) => {
        alert(`Choix : ${event.target.value}`);
    });
}