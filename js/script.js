const timeStamp = '1695315823';
const apiKey = '2adcbf192267c5854a49fd0734a3df2d';
const md5 = 'b276d144220f32ad66dadcf446621ab6';

fetch('https://gateway.marvel.com/v1/public/characters?ts=1695315823&apikey=2adcbf192267c5854a49fd0734a3df2d&hash=b276d144220f32ad66dadcf446621ab6&limit=20'
).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {
        const srcimage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcimage, nameHero, divHero);
    });
    console.log(jsonParsed);
})

function createDivHero(srcimage, nameHero, divToAppend){
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcimage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagens");
}

fetch('https://gateway.marvel.com/v1/public/comics?ts=1695315823&apikey=2adcbf192267c5854a49fd0734a3df2d&hash=b276d144220f32ad66dadcf446621ab6&limit=20'
).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#comics');

    jsonParsed.data.results.forEach(element => {
        const srcimage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcimage, nameHero, divHero);
    });
    console.log(jsonParsed);
})
