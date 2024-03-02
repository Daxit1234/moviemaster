import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import "./DetailsBanner.css";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hook/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoading/Img";
import PosterFallback from "../../../assets/no-poster.png";
import PlayBtn from "./PlayBtn";
import VideoPop from "../../../components/videoPop/VideoPop";
import MovieData from "../../home/Moviedata.json"

const DetailsBanner = ({ video, crew }) => {
  const [dummyData, setDummyData] = useState(null);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const navigate=useNavigate();
  const { id }=useParams();
  const { data, loading ,error} = useFetch(`/movie/${id}`);
  const url = "https://image.tmdb.org/t/p/original";
  useEffect(()=>{
    setDummyData(MovieData?.results.find(item => item.id === parseInt(id)))
  },[])
  
  let newData= !data?.AxiosError ? data  : dummyData  //remove collon in offline

   let genre=[28, 12, 16, 35]
  const _genres = !data?.AxiosError ?  data?.genres.map((g) => g.id) : genre  //remove collon in offline

  const director = crew?.filter((f) => f.job === "Director");

  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writing"
  ) 

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading && !data?.AxiosError ? (
        <>
          {newData && (
            <>
              <div className="backdrop-img">
                <Img src={url + newData.backdrop_path}></Img>
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {newData.poster_path ? (
                      <Img className="posterImg" src={url + newData.poster_path} />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="detail-title">
                      {`${newData.name || newData.title}
                                      ${dayjs(newData?.release_date || "2024-01-18").format(
                                        "(MMM D YYYY)"
                                      )}`}
                    </div>
                    <div className="subtitle">{newData?.tagline || "Retirement didn't suit him."}</div>
                    <Genres genresid={_genres} />
                    <div className="row">
                      <CircleRating rating={newData.vote_average.toString().slice(0,3)} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setVideoId(video.key);
                          setShow(true);
                        }}
                      >
                        <PlayBtn />
                        <span className="text">Watch Trailer</span>
                      </div>
                        <div onClick={()=>navigate(`/cinema/${id}`)} className="btn">Book Now</div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="detail-dec">{newData.overview}</div>
                    </div>
                    <div className="info">
                   
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{newData.status || "Released"}</span>
                        </div>
                
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(newData?.release_date || "2024-01-18").format("MMM, D YYYY")}
                          </span>
                        </div>
                      
                    
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(newData?.runtime || 123)}
                          </span>
                        </div>
                
                    </div>

                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )} 

                     {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {newData?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {newData?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {newData?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPop
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
