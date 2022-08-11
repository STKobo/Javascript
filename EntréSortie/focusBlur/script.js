//au focus, le background de l'element input devient rose et la police devient bleu
let txtfocus = document.getElementsByClass('text-focus');
let txtblur = document.getElementByClass('text-blur');

txtfocus.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    event.target.style.color = 'blue';
})

//element blur qui annulera les effets du focus 
txtblur.addEventListener('blur', () => {
    event.target.style.background='';
    event.target.style.color = '';
})


