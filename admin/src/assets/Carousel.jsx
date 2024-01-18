import "./Carousel.scss"
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoading/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({data,loading,endpoint ,title}) => {
    const carouselContainer=useRef()
    const {url}=useSelector(state=>state.home);
    const navigate=useNavigate()

    const skItem=()=>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }
  return (
    <div className="carousel">
      <ContentWrapper>
        {title &&   <div className='carouselTitle'>{title} </div>}
         {!loading ? (
            <div className="carouselItems">
                {
                    data?.map((items)=>{
                        const poster=items.poster_path ?
                         url.poster + items.poster_path
                        :PosterFallback
                        const rating=items.vote_average.toFixed(1)
                        return(
                            <div key={items.id} 
                            className="carouselItem"
                            onClick={()=>navigate(`${items.media_type?items.media_type:endpoint}/${items.id}`)}>
                                <div className="posterBlock">
                                    <Img src={poster} />
                                    <CircleRating rating={rating} />
                                    <Genres data={items?.genre_ids.slice(0,3)}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {items.title || items.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(items.release_date).format("MMM D,YYYY")}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
         ):(
            <div className="loadingSkeleton">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
            </div>
         )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel


