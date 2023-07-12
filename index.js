const add=() => {


    const num1 = Number(document.querySelector("#input1").value)
    const num2 = Number(document.querySelector("#input2").value)

    let divTest = document.querySelector("#result")

    FinalResult = `${num1 + num2}`

    divTest.innerHTML = `${num1}+${num2} = ${FinalResult}`
}

const clear=() => {
    let divTest = document.querySelector("#result")
    divTest.clear
}