import React from 'react'
import { Link } from 'react-router-dom'

const Cover = () => {
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
            <div className="triangle-button" />
          </Link>
          <div className="inputs">
            <input placeholder="Username" type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
