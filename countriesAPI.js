const apiData = {
    url: "https://restcountries.eu/rest/v2/",
    type2: "all",
    type: "region",
    region: "europe",
}

const {url, region} = apiData
const apiURL = `${apiData.url}${apiData.type2}`
const apiURL2 = `${apiData.url}${apiData.type}/${apiData.region}`

fetch(apiURL)
.then( (data) => data.json())
// .then( (countries) => generateHTMLeuCountries(countries))
.then( (countries) => generateHTMLRandomAllCountries(countries))


fetch(apiURL2)
.then( (data) => data.json())
// .then( (countries) => generateHTMLeuCountries(countries))
.then( (countries) => generateHTMLRandomEUcountries(countries))


const generateHTMLRandomEUcountries = (data) => {
// console.log(data)
const addEUcountriesToDOM = () => {
const randomNumber = Math.floor(Math.random() * (data.length));

const html = `<div class="name"> ${data[randomNumber].name} </div>
<img width="250" src= ${data[randomNumber].flag} >
<div class="details">
<span class="capital"> Capital: ${data[randomNumber].capital} </span>
<span class="region"> Region: ${data[randomNumber].region} </span>
<span class="population"> Population: ${data[randomNumber].population} </span>
<span class="languages"> Languages: ${data[randomNumber].languages[0].name}</span>
</div> `
    countries.innerHTML = html
};

const countries = document.querySelector('.countries')
const randomEUcountriesBtn = document.getElementById('randomEUcountriesBtn')
randomEUcountriesBtn.addEventListener('click', addEUcountriesToDOM) 
}


const generateHTMLRandomAllCountries = (data) => {
// console.log(data)

const addEUcountriesToDOM = () => {
const randomNumber = Math.floor(Math.random() * (data.length));

const html = `<div class="name"> ${data[randomNumber].name} </div>
<img width="250" src= ${data[randomNumber].flag} >
<div class="details">
<span class="capital"> Capital: ${data[randomNumber].capital} </span>
<span class="region"> Region: ${data[randomNumber].region} </span>
<span class="population"> Population: ${data[randomNumber].population} </span>
<span class="languages"> Language: ${data[randomNumber].languages[0].name}</span>
</div> `
    countries.innerHTML = html
};

const countries = document.querySelector('.countries')
const randomAllcountriesBtn = document.getElementById('randomAllcountriesBtn')

randomAllcountriesBtn.addEventListener('click', addEUcountriesToDOM) 
}


