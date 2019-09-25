import axios from "axios";

//initial state
const initialState = {
  pokemon: {results: {}},
  loading: false
};

//action constants
const GET_POKEMON = "GET_POKEMON";

//action builders
export function getPokemon(url) {
  let pokePromise = axios.get(url).then(res => {
    return res.data;
  });
  return {
    type: GET_POKEMON,
    payload: pokePromise
  };
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON + "_PENDING":
      return {...state, loading: true};

    case GET_POKEMON + "_REJECTED":
      return {...state, loading: false};

    case GET_POKEMON + "_FULFILLED":
      return {...state, loading: false, pokemon: action.payload};

    default:
      return state;
  }
};

export default reducer;
