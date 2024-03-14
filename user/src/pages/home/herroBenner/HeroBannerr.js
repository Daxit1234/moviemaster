import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hook/useFetch';
import Img from '../../../components/lazyLoading/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./herobanner.css"
import moviedata from "../Moviedata.json"

let HeroBannerr=()=> {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  // const { data, loading } = useFetch("/movie/upcoming")
  const url  ="https://image.tmdb.org/t/p/original"
  useEffect(() => {
    const bg =
      url+
       moviedata?.results ?.[Math.floor(Math.random() * 20)]
        ?.backdrop_path;
        console.log(bg)
    setBackGround(bg)
  }, [])

  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  const searchQueryHandleclick = (e) => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img className="lazy-load-image-background heroimg" src={backGround}/>
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className='title'>Welcome</span>
          <span className='subTitle'>
          Your Cinematic Journey Begins Here – Secure Your Spot in the Limelight.
          </span>
          <div className="searchInput">
            <input type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search for Movies...'
              onKeyUp={searchQueryHandle} />
            <button className="searchButton" onClick={searchQueryHandleclick}> Search</button>
          </div>
        </div>
      </div>
      </ContentWrapper> 
    </div>
  )
}

export default HeroBannerr
