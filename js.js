import allCountries from './data.js';
// console.log(allCountries);

let container = document.querySelector(".container")

let btn_all = document.querySelector(".btn-all")
let btn_antarctica = document.querySelector(".btn-antarctica")
let btn_afr = document.querySelector(".btn-afr")
let btn_asia = document.querySelector(".btn-asia")
let btn_eu = document.querySelector(".btn-eu")
let btn_oce = document.querySelector(".btn-oce")
let btn_na = document.querySelector(".btn-na")
let btn_sa = document.querySelector(".btn-sa")

btn_all.addEventListener("click", allcountries.bind(this, "All"))
btn_antarctica.addEventListener("click", allcountries.bind(this, "Antarctica"))
btn_afr.addEventListener("click", allcountries.bind(this, "Africa"))
btn_asia.addEventListener("click", allcountries.bind(this, "Asia"))
btn_eu.addEventListener("click", allcountries.bind(this, "Europe"))
btn_oce.addEventListener("click", allcountries.bind(this, "Oceania"))
btn_na.addEventListener("click", allcountries.bind(this, "North America"))
btn_sa.addEventListener("click", allcountries.bind(this, "South America"))



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
})}





// allCountries.map(i => {
    
//     let name = i.name.common
//     let capital = i.capital
//     let flagpng = i.flags.png
//     let border = i.borders
//     let lang = i.languages
//     let cont = i.continents
//     let currency = i.currencies

//     for (let c in currency){
//         currency = c
//     }
    
    
//     if (capital == undefined){
//         capital = "Doesn't have any"
//     }

//     if (border == undefined){
//         border = "Doesn't have any"
//     }

//     if (lang == undefined){
//         lang = "Doesn't have any"
//     }

//     if (currency == undefined){
//         currency = "Doesn't have any"
//     }

//     let div = document.createElement("div")
//     let countryname = document.createElement("h2")
//     countryname.textContent = name

//     let countrycapital = document.createElement("h3")
//     countrycapital.textContent = "Capital: " + capital
    
//     let countryflagpng = document.createElement("img")
//     countryflagpng.src = flagpng

//     let countryborder = document.createElement("p")
//     countryborder.textContent = "Borders: " + border

//     let countrycont = document.createElement("p")
//     countrycont.classList.add("cont")
//     countrycont.textContent = cont

//     let countrylang = document.createElement("p")
//     countrylang.textContent = "Languages: " + Object.values(lang)
//     if (name == "Antarctica"){
//         countrylang.textContent = "Languages: Doesn't have any"
//     }

//     let countrycurr = document.createElement("p")
//     countrycurr.textContent = "Currencies: " + currency

//     if (cont == "Europe"){
//         div.style.background = "lightblue"
//     }
//     else if (cont == "Africa"){
//         div.style.background = "lightyellow"
//     }
//     else if (cont == "North America"){
//         div.style.background = "#ff5252"
//     }
//     else if (cont == "South America"){
//         div.style.background = "lightgreen"
//     }
//     else if (cont == "Asia"){
//         div.style.background = "lightgrey"
//     }
//     else if (cont == "Oceania"){
//         div.style.background = "Yellow"
//     }

//     div.appendChild(countryname)
//     div.appendChild(countrycont)
//     div.appendChild(countrycapital)
//     div.appendChild(countryflagpng)
//     div.appendChild(countryborder)
//     div.appendChild(countrylang)
//     div.appendChild(countrycurr)
//     container.appendChild(div)
// });