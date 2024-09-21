import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import loadingImg from '../image/loading__.gif'
import axios from 'axios'

export default function Search() {
    const [data, setData] = useState([]);
    const { query } = useParams();
    const [loading, setLoading] = useState(true);
    const fetchNews = async () => {
        const response = await axios.post("http://eventregistry.org/api/v1/article/getArticles", { apiKey: "0cdab825-d20f-4302-95b4-c321cb433d19", keyword: query, lang: "hin", articlesCount: "40" })
        setLoading(false)
        setData(response.data.articles.results);
    }
    useEffect(() => {
        fetchNews();
        setLoading(true)
    }, [query])
    return (
        <div className='container mb-3' style={{ marginTop: '100px' }}>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="card">
                        <div className="card-header bg-warning text-light fw-bold" style={{fontSize:'20px'}}>Showing Result For :  {query}</div>
                    </div>
                </div>
                {
                    data.length > 0 ?
                        !loading ? data.map((article, index) => {
                            return (
                                <div className="col-12 col-md-3 my-2" key={index}>
                                    <Link to={`../news/${article.uri}`}>
                                        <div className="card p-2">
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src={article.image} className='img-fluid w-100' style={{ height: '100' }} alt="" />
                                                </div>
                                                <div className="col-12 my-2">
                                                    <h4 className='h6 hover-red-without-UL fw-bold'>{article.title.substr(0, 65)}...</h4>
                                                    <p><small>BY : <span className='text-danger'>{article.source.title}</span> | Published : <span className='text-muted'>{article.date}</span></small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                            :
                            <div className="col-2 text-center">
                                <img src={loadingImg} className='loding-img' alt="" />
                                loading...Please wait
                            </div>
                        :
                        <div className="col-12 text-center text-danger">
                            <i> Sorry Nothing found for your search.</i>
                        </div>
                }
            </div>
        </div>
    )
}
