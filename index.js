const events = "birthday"
const dogs = ["Wallace", "Sniff", "Charlie", "Perr"]

function writeCards(dogs, events) {
    let cards =[]
    for (let i = 0; i < dogs.length; i++) {
        cards.push(`Thank you, ${dogs[i]}, for the wonderful ${events} gift!`)
    }
    return cards
}

writeCards(dogs, events)

function countDown(integer) {
    let x = 10
    while (x >= 0) {
        console.log(x)
        x--
    }
    return integer
}

countDown(integer)