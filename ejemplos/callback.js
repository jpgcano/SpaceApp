function dos () {
    console.log("dos")
}

function uno () {
    console.log("uno")
    dos()
}

setTimeout(uno,5000)