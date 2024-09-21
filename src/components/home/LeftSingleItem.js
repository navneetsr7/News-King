import React from 'react'
import { Link } from 'react-router-dom'

function LeftSingleItem(props) {
  return (
    <div className="col-12">
      <Link to={`news/${props.uri}`}>
        <div className="row">
          <div className="col-8">
            <h5 className='h5'>{props.headline}</h5>
            <p><small><span className='text-danger'>{props.source}</span> | <span className='text-muted'>{props.date} </span></small></p>
          </div>
          <div className="col-4">
            <img src={props.img} alt="" className='img-fluid' />
          </div>
        </div>
        <hr />
      </Link>
    </div>
  )
}

export default LeftSingleItem
