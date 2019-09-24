import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPokemon, getDetails } from '../../ducks/pokeReducer'
import { Link } from 'react-router-dom'

const Open = props => {
  useEffect(() => {
    if (!props.user) props.history.push('/')
  })
  const moveToDetails = (url, name) => {
    props.getDetails(url)
    props.history.push(`/pokemon/${name}`)
  }
  return (
    <div className="open">
      <div className="background">
        <div className="camera-ring">
          <Link to="/">
            <div className="camera-circle" />
          </Link>
        </div>
        <div className="circles-container">
          <div className="little-circle red" />
          <div className="little-circle yellow" />
          <div className="little-circle green" />
        </div>
        <div className="inside">
          <h1>Welcome, {props.user}!</h1>
          {props.loading
            ? 'Loading...'
            : props.pokemon.results.map(pokemon => (
                <h3
                  key={pokemon.name}
                  onClick={() => moveToDetails(pokemon.url, pokemon.name)}
                >
                  {pokemon.name}
                </h3>
              ))}
          <button
            disabled={!props.pokemon.previous}
            onClick={() => props.getPokemon(props.pokemon.previous)}
          >
            {'<<<'}
          </button>
          <button
            disabled={!props.pokemon.next}
            onClick={() => props.getPokemon(props.pokemon.next)}
          >
            {'>>>'}
          </button>
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(reduxState) {
  const { user } = reduxState.user
  const { pokemon, loading } = reduxState.pokemon
  return { user, pokemon, loading }
}

export default connect(
  mapStateToProps,
  { getPokemon, getDetails }
)(Open)
