import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Details = props => {
  useEffect(() => {
    if (!props.user) props.history.push('/')
  })
  return (
    <div className="details">
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
          {props.loading ? (
            'Loading...'
          ) : (
            <>
              <h1>
                #{props.details.id}: {props.details.name}
              </h1>
              <div className="img">
                <img src={props.details.sprites.front_default} alt="" />
              </div>
              <h2>Abilities:</h2>
              {props.details.abilities.map((ability, i) => (
                <h4 key={i}>{ability.ability.name}</h4>
              ))}
              <h2>Type(s):</h2>
              {props.details.types.map((type, i) => (
                <h4 key={i}>{type.type.name}</h4>
              ))}
            </>
          )}
          <button onClick={() => props.history.goBack()}>{'<<<'}</button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  const { user } = reduxState.user
  const { details, loading } = reduxState.pokemon
  return { details, user, loading }
}

export default connect(mapStateToProps)(Details)
