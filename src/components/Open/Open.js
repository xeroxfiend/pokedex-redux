import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h3>Welcome, {props.user}!</h3>
      </div>
    </div>
  </div>
)

function mapStateToProps(reduxState) {
  const {user} = reduxState.userReducer
  return {user}
}

export default connect(
  //two params
  /// 1. a function that takes in redus state and returns 
  /// an object with the state we want

  /// 2. takes an object that contains any action builders.
  mapStateToProps, 

)(Open)

//iife immediately invoked function expression
