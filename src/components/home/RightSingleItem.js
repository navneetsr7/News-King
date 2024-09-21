import React from 'react'
import { Link } from 'react-router-dom'

export default function RightSingleItem(props) {
    return (
        <div className="row hover-red">
            <div className="col-12">
                <Link to={`../news/${props.uri}`}>
                    <div className="row">
                        <div className="col-4 ">
                            <img src={props.img} alt="" className='img-fluid' />
                        </div>
                        <div className="col-8">
                            <h4 className='h6 hover-red-without-UL'>{(props.headline).substr(0,65)}...</h4>
                        </div>
                        <div className="col-12">
                        <p><small>BY : <span className='text-danger'>{props.source}</span> | Published : <span className='text-muted'>{props.date}</span></small></p>
                        </div>
                    </div>
                </Link>
                <hr className='muted' />
            </div>
        </div>
    )
}
