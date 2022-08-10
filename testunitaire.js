//Fonction test avec l’age en paramètres
function valueAge (age) {
    //Test de l’input : Est-ce un nombre ? 
    //La fonction isNaN ( isNotaNumber ) retourne vrai si la valeur n’es pas un nombre
    if (isNaN(age)){
            return false
    }
    //Test de l’input : Est-ce que ce nombre est supérieur à 18 ?
    if (age < 18 ){
        return false 
    }
    return true
    } 
    function testAge (input, result) {
    if (valueAge(input) === result){
    console.log(`Test réussi pour ${input}`)
    return true
    }
    else {
        console.log(`Test échoué pour ${input}`)
            return false
    }
    }
    //On peut lancer le test avec la commande suivante :
    testAge(25, true) 
    testAge('nano', false) 
    testAge(12, false) 
    //Sur les 3 tests lancés, seul 1 retournera true
    testAge(5, true) 
    //Le dernier passera comme invalide car nous lui avons marqué attendre un true
    //Cependant l’âge étant inférieur à 18, la réponse sera false.

   