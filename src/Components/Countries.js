import { Country } from "./Country.js"

export const Countries = (countries, onlyCountry)=> countries.map(country => Country(country, onlyCountry) )