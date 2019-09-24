import axios from 'axios'

const initialState = {
  pokemon: {results: []},
  details: {types: [], abilities: [], sprites: {front_default: ''}},
  loading: false
}

// ACTION CONSTANTS
const GET_POKEMON = 'GET_POKEMON'
const GET_DETAILS = 'GET_DETAILS'

// ACTION BUILDERS
export const getPokemon = (url) => {
  let pokemon = axios.get(url).then(res => {
    return res.data
  })
  return {
    type: GET_POKEMON,
    payload: pokemon
  }
}

export const getDetails = url => {
  let pokemonDetails = axios.get(url).then(res => {
    return res.data
  })
  return {
    type: GET_DETAILS,
    payload: pokemonDetails
  }
}

export default function (state = initialState, action) {
  switch(action.type) {
    // FOR GETTING POKEMON LIST
    case GET_POKEMON + '_PENDING':
      return {...state, loading: true}
    case GET_POKEMON + '_REJECTED':
      return {...state, loading: false}
    case GET_POKEMON + '_FULFILLED':
      return {...state, loading: false, pokemon: action.payload}
    // FOR GETTING POKEMON DETAILS
    case GET_DETAILS + '_PENDING':
      return {...state, loading: true}
    case GET_DETAILS + '_REJECTED':
      return {...state, loading: false}
    case GET_DETAILS + '_FULFILLED':
      return {...state, loading: false, details: action.payload}
    // DEFAULT CASE
    default: return state
  }
}