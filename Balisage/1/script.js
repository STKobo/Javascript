function disBonjour(){
    alert('Il a pas dit bonjour')
}


function utiliseLesSelecteurs(){
    // récupérer tous les éléments via leurs noms de balises 
    var mesDiv = document.getElementsByTagName('div');
    console.log(mesDiv);

    //récupérer un élément via son id 
    var monElement = document.getElementById("noeud");
    console.log(monElement);

    //récupérer les éléments via leurs nom
    let elementByName = document.getElementsByName("monNom");
    console.log(elementByName);

    //récupérer les éléments par classe
    let ElemByClass = document.getElementsByClassName("maClasse");
    console.log(ElemByClass);

    //récupéré un élément comme on pourrait le faire en CSS 
    let querySelector = document.querySelector('p.i.maClasse');
    console.log(querySelector);
}