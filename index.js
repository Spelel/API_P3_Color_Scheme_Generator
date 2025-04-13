colorBtn.addEventListener("click", test)

let colorArry = []

function test() {
    const colour = document.getElementById("seed-color").value.substring(1)
    const mode = document.getElementById("color-scheme").value.toLowerCase()
    console.log(colour, mode)

    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        colorArry = data
        renderColors()
    })
}

function renderColors() {
    document.getElementById("c1").innerHTML = `
        <img src="${colorArry.colors[0].image.named}"/>
    `
    document.getElementById("c2").innerHTML = `
        <img src="${colorArry.colors[1].image.named}"/>
    `
    document.getElementById("c3").innerHTML = `
        <img src="${colorArry.colors[2].image.named}"/>
    `
    document.getElementById("c4").innerHTML = `
        <img src="${colorArry.colors[3].image.named}"/>
    `
    document.getElementById("c5").innerHTML = `
        <img src="${colorArry.colors[4].image.named}"/>
    `

        
}



// let newArray = Object.keys(data).map((key) => [key, data[key]])