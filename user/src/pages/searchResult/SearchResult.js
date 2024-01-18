import "./SearchResult.css"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import noResults from "../../assets/no-results.png";
import Img from "../../components/lazyLoading/Img";
import PosterFallback from "../../assets/no-poster.png";


function SearchResult() {
  const url = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loding, setLoading] = useState(false)
  const { query } = useParams()

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };
  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  let Spinner=()=>{
    return(
      <div class="loader"><h1 className="text-light">loading</h1></div>
    )
  }

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  },[query]);

  return (
    <div className="searchResultsPage">
      {!loding ? (
        <ContentWrapper>
          {data?.results.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${data?.total_results > 1 ? "results" : "result"} of ${query}`}
              </div>
              <InfiniteScroll
                  className="row"
                  dataLength={data.results.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner/>}
              >
                {data?.results.map((items)=>{
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
              </InfiniteScroll>
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
        <Spinner initial={true} />
      </>
      }
    </div>
  )
}

export default SearchResult

