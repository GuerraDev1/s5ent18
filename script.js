function positions (firstPlace, secondPlace, lastPlace) {
    
    let podium = [firstPlace, secondPlace, lastPlace]
    let posicaoDaniel = podium.indexOf("Daniel")
    
    for(;posicaoDaniel > 0; posicaoDaniel--){

        let anteriorDaniel = podium[posicaoDaniel - 1]
        podium[posicaoDaniel - 1]  = "Daniel"
        podium[posicaoDaniel] = anteriorDaniel

    }

    let mural = `1°- Colocado ${podium[0]}, 2°- Colocado ${podium[1]}, 3°- Colocado ${podium[2]}.`

    return mural
}
console.log(positions ('Rafael', 'Daniel', 'Manoel'))
console.log(positions ('Manoel', 'Rafael', 'Daniel'))
console.log(positions('Daniel', 'Manoel', 'Rafael'))