import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hook/useFetch';
import Img from '../../../components/lazyLoading/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./herobanner.css"

function HeroBannerr() {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  // const navigate = useNavigate()
  const { data, loading } = useFetch("/movie/upcoming")
  console.log(data)
  const url  ="https://image.tmdb.org/t/p/original"

  useEffect(() => {
    const bg =
      url+
      data?.results?.[Math.floor(Math.random() * 20)]
        ?.backdrop_path;
    setBackGround(bg)
  }, [data])
  console.log(backGround)


  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      // navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      {!loading&& <div className="backdrop-img">
        <Img className="lazy-load-image-background heroimg" src={backGround}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className='title'>WelCome</span>
          <span className='subTitle'>
            Millions of Movie ,TV Shows and people
            to discover Expolore now
          </span>
          <div className="searchInput">
            <input type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search for Movie or TV Shows...'
              onKeyUp={searchQueryHandle} />
            <button className="searchButton"> Search</button>
          </div>
        </div>
      </div>
      </ContentWrapper> 
    </div>
  )
}

export default HeroBannerr
