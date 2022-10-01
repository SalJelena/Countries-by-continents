export const Country = (country, onlyCountry)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = `Name: ${country.name}`

    const nativeName = document.createElement('p')
    nativeName.textContent = `Native name: ${country.nativeName}`

    const population = document.createElement('p')
    population.textContent = `Population: ${country.population}`

    const capital = document.createElement('p')
    capital.textContent = `Capital: ${country.capital}`

    const levelDomain = document.createElement('p')
    levelDomain.textContent = `Domain: ${country.topLevelDomain}`

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    if (onlyCountry == true) {
        divCountry.append(p, nativeName, population, capital, levelDomain, img, document.createElement('hr'))
    } else divCountry.append(p, img, document.createElement('hr'))

    return divCountry
}