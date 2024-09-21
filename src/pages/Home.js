import React from 'react'
import LeftContent from '../components/home/LeftContent'
import RightContent from '../components/home/RightContent'

function Home() {
    return (
        <div className='container mb-3' style={{ marginTop: "100px" }}>
            <div className="row">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    )
}

export default Home
