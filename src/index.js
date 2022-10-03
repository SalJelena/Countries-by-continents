import { Countries } from "./components/Countries.js"
import { getAllCountries } from "./service.js"
import { divSelect, main, inputFilter, btnReset } from "./constants.js"

let countries = []

const Select = (regions) => {
    const select = document.createElement("select")
    select.className = 'header__select'

    const defOpt = document.createElement("option")
    defOpt.value = "-1"
    defOpt.selected = true
    defOpt.disabled = true
    defOpt.hidden = true
    defOpt.textContent = `Choose a region`

    select.append(defOpt)

    regions.forEach((region) => {
        const opt = document.createElement("option")
        opt.value = region
        opt.textContent = region
        select.append(opt)
    });

    return select
};

const generateSelect = (arr) => {

    let options = new Set(countries.map(country => {
        if (!country.region) {
            return 'Other'
        }
        return country.region
    }))

    divSelect.innerHTML = ''
    let select = Select(options)

    select.addEventListener('change', () => {
        main.innerHTML = ''
        let temp = arr.filter(country => {
            if (select.value == 'Other') {
            return country.region.trim().toLowerCase() == ''
            } else {
            return country.region.toLowerCase() == select.value.toLowerCase()
            }
        })

        main.append(...Countries(temp, false))
        onlyOneCountry(...Countries(temp))
    })

    divSelect.append(select)
}

getAllCountries().then((res) => {
	countries = res.data
	main.append(...Countries(countries, false))
	generateSelect(countries)
	onlyOneCountry(countries)

    btnReset.addEventListener('click', () => {
        main.innerHTML = ''
        inputFilter.value = ''
        main.append(...Countries(countries, false))
    })
})
    
const onlyOneCountry = (arr) => {
	if(arr.length == 1){
		main.append(...Countries(arr, true))
	} else {
		main.append(...Countries(arr, false))
	}
}
 
inputFilter.addEventListener('input', () => {
	main.innerHTML = ''
	let filter = countries.filter(country => country.name.toLowerCase().includes(inputFilter.value.toLowerCase()))

	onlyOneCountry(filter)
		
	divSelect.innerHTML = ''
	generateSelect(filter)
}) 