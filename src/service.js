import axios from 'axios'

const BASE = 'https://restcountries.com/v2'
const ALL = '/all'

export const getAllCountries = () => axios.get(BASE+ALL)