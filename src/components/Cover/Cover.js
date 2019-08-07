import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/userReducer'
import { getPokemon } from '../../ducks/pokeReducer'
import { Link } from 'react-router-dom'

const Cover = props => {
  return (
    <div className="cover">
      <div className="background">
        <div className="camera-ring">
          <div className="camera-circle" />
        </div>
        <div className="circles-container">
          <div className="little-circle red" />
          <div className="little-circle yellow" />
          <div className="little-circle green" />
        </div>
        <div className="lid">
          <Link to="/open">
            <div onClick={() => props.getPokemon('https://pokeapi.co/api/v2/pokemon')} className="triangle-button" />
          </Link>
          <div className="inputs">
            <input
              onChange={e => props.setUser(e.target.value)}
              placeholder="Username"
              type="text"
              value={props.user}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = reduxState => {
  const { user } = reduxState.user
  return { user }
}

export default connect(
  mapStateToProps,
  { setUser, getPokemon }
)(Cover)
