import "./SearchResult.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import noResults from "../../assets/no-results.png";
import Img from "../../components/lazyLoading/Img";
import PosterFallback from "../../assets/no-poster.png";
import searchData from "../home/Moviedata.json"

function SearchResult() {
  const url = "https://image.tmdb.org/t/p/original";
  const [loding, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams()

  useEffect(()=>{
      // Filter data based on search term
      const results = searchData.results.filter(movie =>
        movie.title.toLowerCase().includes(query?.toLowerCase())
      );
      setSearchResults(results);
  },[query])
  console.log(searchResults)
  return (
    <div className="searchResultsPage">
      {loding ? (
        <ContentWrapper>
          {searchResults?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${searchResults.length > 1 ? "results" : "result"} of ${query}`}
              </div>
              <div className="row">

                {searchResults?.map((items)=>{
                  if(items.media_type==="person") return;
                  const poster=items.poster_path ?
                  url+ items.poster_path
                 :PosterFallback
                 const rating = items.vote_average.toFixed(1);
                  return(
                    <div className="col-md-2 col-6" key={items.id}>
                <MovieCard
                    poster={poster}
                    rating={rating}
                    title={items.title || items.name}
                    date={items.release_date}
                    genres={items.genre_ids}
                    id={items.id}
                />
                  </div>
                  )
                })}
              </div>
            </>
          ) :
          <span className="resultNotFound">
            <span className="">Sorry Results Not Found</span>
            <Img className="resultNotFound" src={noResults} />  

          </span>
          }
        </ContentWrapper>
      ) :
      <>
        
      </>
      }
    </div>
  )
}

export default SearchResult

