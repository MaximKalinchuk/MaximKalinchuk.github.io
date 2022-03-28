let thirstCounter = document.getElementsByClassName("counter")

let thirstCard = Number(thirstCounter[0].textContent)
let secondCard = Number(thirstCounter[1].textContent)

let id;
const iter = () => {


    if (thirstCard < 2) {
        clearInterval(id)
    }
    console.log(thirstCard)
    thirstCard -= 1
    secondCard += 1

    document.getElementsByClassName("counter")[0].innerHTML = `<img src="img/js-icon.svg"><h3>${thirstCard}</h3>`
    document.getElementsByClassName("counter")[1].innerHTML = `<img src="img/js-icon.svg"><h3>${secondCard}</h3>`
}

id = setInterval(iter, 50)

// const item = document.body.childNodes
// console.log(item)