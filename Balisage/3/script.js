function utiliseLesSelecteurs(){

}

var btn = document.getElementById("btnGenererWysiwyg");

function remplaceLeTexte() {
    //récupérer le texte dans l'input 
    let textInput = document.getElementById("leTexteARecuperer").value;

    //récupérer le noeud
    let monParagraphe = document.querySelector('#leTexteARemplacer');

    //mettre le texte de l'input dans le noeud 
    monParagraphe.textContent = textInput; 
}


btn.addEventListener('click', remplaceLeTexte); 