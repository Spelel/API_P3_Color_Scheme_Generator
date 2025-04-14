const hecC = document.getElementById("hexColor")

colorBtn.addEventListener("click", function() {
    render()
    hecC.style.display = "flex"
})

let colorArry = []

function render() {
    const colour = document.getElementById("seed-color").value.substring(1)
    const mode = document.getElementById("color-scheme").value.toLowerCase()
    console.log(colour, mode)

    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        colorArry = data
        console.log(colorArry)
        renderColors()
        renderHexCode()
    })
}

function renderColors() {
    document.getElementById("c0").innerHTML = `
        <img src="${colorArry.colors[0].image.bare}"/>
    `
    document.getElementById("c1").innerHTML = `
        <img src="${colorArry.colors[1].image.bare}"/>
    `
    document.getElementById("c2").innerHTML = `
        <img src="${colorArry.colors[2].image.bare}"/>
    `
    document.getElementById("c3").innerHTML = `
        <img src="${colorArry.colors[3].image.bare}"/>
    `
    document.getElementById("c4").innerHTML = `
        <img src="${colorArry.colors[4].image.bare}"/>
    `
        
}


function renderHexCode(){
    document.getElementById("h0").innerHTML = `
        <p>${colorArry.colors[0].hex.value}</p>
    `
    document.getElementById("h1").innerHTML = `
        <p>${colorArry.colors[1].hex.value}</p>
    `
    document.getElementById("h2").innerHTML = `
        <p>${colorArry.colors[2].hex.value}</p>
    `
    document.getElementById("h3").innerHTML = `
        <p>${colorArry.colors[3].hex.value}</p>
    `
    document.getElementById("h4").innerHTML = `
        <p>${colorArry.colors[4].hex.value}</p>
    `
}




