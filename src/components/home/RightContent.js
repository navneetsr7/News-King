import React, { useEffect, useState } from 'react'
import RightSingleItem from './RightSingleItem';
import axios from 'axios';
import loadingImg from '../../image/loading__.gif'

export default function RightContent() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const fetchRightSingleItem = async () => {
        const response = await axios.post("http://eventregistry.org/api/v1/article/getArticles",{apiKey:"0cdab825-d20f-4302-95b4-c321cb433d19",keyword:"economy",lang:"hin",articlesCount:"10"})
        setLoading(false);
        setData(response.data.articles.results);
    }
    useEffect(()=>{
        fetchRightSingleItem();
    },[])
    return (
        <div className="col-12 col-md-4 my-2">
            <div className="card">
            <div className="card-header bg-warning text-light fw-bold">Top News Headlines</div>
                <div className="card-body">
                    <div className="row">
                        {
                            loading ? <div className="col-12 text-center"><img src={loadingImg} alt="" height={'50px'} width={'50px'}/></div> : data.map((article,index)=>{
                                return (
                                    <RightSingleItem key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
