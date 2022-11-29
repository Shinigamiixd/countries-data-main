import allCountries from './data.js';
// console.log(allCountries);

let body = document.querySelector("body")
let btn_container = document.createElement("div")
btn_container.classList.add("btn-container")
let container = document.createElement("div")
container.classList.add("container")


let btn_arr = [
    {
        "name": "btn_all",
        "text": "All"
    },
    {
        "name": "btn_antarctica",
        "text": "Antarctica"
    },
    {
        "name": "btn_afr",
        "text": "Africa"
    },
    {
        "name": "btn_asia",
        "text": "Asia"
    },
    {
        "name": "btn_eu",
        "text": "Europe"
    },
    {
        "name": "btn_oce",
        "text": "Oceania"
    },
    {
        "name": "btn_na",
        "text": "North America"
    },
    {
        "name": "btn_sa",
        "text": "South America"
    }
]


for (let o in btn_arr){
    window[`var ${btn_arr[o].name}`]
    btn_arr[o].name = document.createElement("button")
    btn_arr[o].name.innerText = btn_arr[o].text
    btn_container.appendChild(btn_arr[o].name)
    btn_arr[o].name.addEventListener("click", allcountries.bind(this, btn_arr[o].text))
}

body.appendChild(btn_container)
body.appendChild(container)


function allcountries(cc){
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    allCountries.map(i => {     
        let cont = i.continents
        let name = i.name.common
        let capital = i.capital
        let flagpng = i.flags.png
        let border = i.borders
        let lang = i.languages
        let currency = i.currencies

        for (let c in currency){
            currency = c
        }


        if (cont == cc){
        }
        else if (cc == "All"){
        }
        else{
            return
        }
        
        if (capital == undefined){
            capital = "Doesn't have any"
        }

        if (border == undefined){
            border = "Doesn't have any"
        }

        if (lang == undefined){
            lang = "Doesn't have any"
        }

        if (currency == undefined){
            currency = "Doesn't have any"
        }

        let div = document.createElement("div")
        let countryname = document.createElement("h2")
        countryname.textContent = name

        let countrycapital = document.createElement("h3")
        countrycapital.textContent = "Capital: " + capital
        
        let countryflagpng = document.createElement("img")
        countryflagpng.src = flagpng

        let countryborder = document.createElement("p")
        countryborder.textContent = "Borders: " + border

        let countrycont = document.createElement("p")
        countrycont.classList.add("cont")
        countrycont.textContent = cont

        let countrylang = document.createElement("p")
        countrylang.textContent = "Languages: " + Object.values(lang)
        if (name == "Antarctica"){
            countrylang.textContent = "Languages: Doesn't have any"
        }

        let countrycurr = document.createElement("p")
        countrycurr.textContent = "Currencies: " + currency

        if (cont == "Europe"){
            div.style.background = "lightblue"
        }
        else if (cont == "Africa"){
            div.style.background = "lightyellow"
        }
        else if (cont == "North America"){
            div.style.background = "#ff5252"
        }
        else if (cont == "South America"){
            div.style.background = "lightgreen"
        }
        else if (cont == "Asia"){
            div.style.background = "lightgrey"
        }
        else if (cont == "Oceania"){
            div.style.background = "Yellow"
        }

        div.appendChild(countryname)
        div.appendChild(countrycont)
        div.appendChild(countrycapital)
        div.appendChild(countryflagpng)
        div.appendChild(countryborder)
        div.appendChild(countrylang)
        div.appendChild(countrycurr)
        container.appendChild(div)
})};