import React from 'react'
import { Link } from 'react-router-dom'

function MainHeadline(props) {
  return (
    <div className="col-12 p-1">
      <Link to={`news/${props.uri}`}>
    <img src={props.img} alt="" className='img-fluid' />
    <h3 className='news-headline mt-2'>{props.headline}</h3>
    <p><span className='text-danger'>{props.source}</span> | <span className='text-muted'>Published :{props.date}</span></p>
    </Link>
</div>
  )
}

export default MainHeadline
