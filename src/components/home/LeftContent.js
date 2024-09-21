import React, { useEffect, useState } from 'react'
import MainHeadline from './MainHeadline'
import LeftSingleItem from './LeftSingleItem'
import axios from 'axios'
import loadingImg from '../../image/loading__.gif'
import '../../css/App.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function LeftContent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data1, setData1] = useState([]);
    const fetchMainHeadline = async () => {
        const response = await axios.post("http://eventregistry.org/api/v1/article/getArticles", { apiKey: "0cdab825-d20f-4302-95b4-c321cb433d19", keyword: "breaking", lang: "hin", articlesCount: "8" })
        setLoading(false);
        // console.log(response);
        setData(response.data.articles.results);
    }
    const fetchLeftSingleItem = async () => {
        const response = await axios.post("http://eventregistry.org/api/v1/article/getArticles", { apiKey: "0cdab825-d20f-4302-95b4-c321cb433d19", keyword: "india", lang: "hin", articlesCount: "6" })
        setLoading(false);
        console.log(response);
        setData1(response.data.articles.results);
    }
    useEffect(() => {
        fetchMainHeadline ();
        fetchLeftSingleItem();
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
        <div className="col-12 col-md-8 my-2">
            {
                !loading ?
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-dark text-success fw-bold">Breaking News</div>
                                <div className="card-body">
                                    <Slider className="row" {...settings}>
                                        {
                                            data.map((article, index) => {
                                                return (
                                                    <MainHeadline key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title} />
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="card">
                                <div className="card-header bg-warning text-success fw-bold">Treading News</div>
                                <div className="card-body">
                                    {
                                        data1.map((article, index) => {
                                            return (
                                                <LeftSingleItem key={index} source={article.source.title} date={article.date} uri={article.uri} img={article.image} headline={article.title} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-12 text-center">
                        <img src={loadingImg} alt="" height={'50px'} width={'50px'} />
                    </div>
            }
        </div>
    )
}
