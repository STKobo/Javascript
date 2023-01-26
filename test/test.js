function valueAge (age) {
   if (isNaN(age)){
            return false
    }
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
    testAge(25, true) 
    testAge('nano', false) 
    testAge(12, false) 
    testAge(5, true) 
    