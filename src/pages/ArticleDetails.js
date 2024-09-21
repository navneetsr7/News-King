import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import loadingImg from '../image/loading__.gif'
import RightContent from '../components/home/RightContent';


export default function ArticleDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { uri } = useParams();
    const headers = {
        'Content-Type': 'application/json'
    }
    const fetchArticleDetails = async () => {
        const response = await axios.post("http://eventregistry.org/api/v1/article/getArticle", { articleUri: uri, apiKey: "0cdab825-d20f-4302-95b4-c321cb433d19" }, { headers })
        console.log(response.data)
        const result = await response.data[uri].info;
        setData(result);
        setLoading(false);
    }
    useEffect(() => {
        fetchArticleDetails();
    }, [uri]);
    return (
        <div className='container my-2' >
            <div className="row" style={{marginTop:'100px'}}>
                <div className="col-12 my-2 col-md-8">
                    <div className="card">
                        <div className="card-body">
                            {
                                !loading ?
                                    <>
                                        <h3 className='fw-bold'>{data.title}</h3>
                                        <img src={data.image} className='my-2 img-fluid' alt={data.title} />
                                        <p><small>By : <span className='fw-bold text-success'>{data.source['title']}</span> | Published : <span className='fw-bold'>{data.date}</span></small></p>
                                        <hr />
                                        <p>{data.body}</p>
                                    </> :
                                    <div className="text-center">
                                        <img src={loadingImg} alt="loading" />
                                        <br />
                                        <span className='text-muted'>Loading... Please wait a while</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <RightContent />
            </div>
        </div>
    )
}
