import axios from 'axios'

const initialState = {
  pokemon: {results: []},
  loading: false
}

// ACTION CONSTANTS
const GET_POKEMON = 'GET_POKEMON'

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

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_POKEMON + '_PENDING':
      return {...state, loading: true}
    case GET_POKEMON + '_REJECTED':
      return {...state, loading: false}
    case GET_POKEMON + '_FULFILLED':
      return {loading: false, pokemon: action.payload}
    default: return state
  }
}