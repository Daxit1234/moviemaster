import "./Carousel.css";
import React from "react";
import PosterFallback from "../../assets/no-poster.png";
import MovieCard from "../movieCard/MovieCard";
// import Genres from "../genres/Genres";

const Carousel = ({ data, loading}) => {
  // const carouselContainer=useRef()
  const url = "https://image.tmdb.org/t/p/original";

  // const skItem = () => {
  //   return (
  //     <div className="skeletonItem">
  //       <div className="posterBlock skeleton"></div>
  //       <div className="textBlock">
  //         <div className="title skeleton"></div>
  //         <div className="date skeleton"></div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="row">
       {data?.map((items) => {
              const poster=items.poster_path ?
               url+ items.poster_path
              :PosterFallback
              const rating = items.vote_average.toFixed(1);
              return (
                <div className="col-md-2 col-6" key={items.id}>
                <MovieCard
                    poster={poster}
                    rating={rating}
                    title={items.title || items.name}
                    date={items.release_date}
                />
            </div>
              );
            })}
    </div>
    // <div className="carousel">
    //     {title && <div className="carouselTitle">{title} </div>}
    //     {!loading ? (
    //       <div className="carouselItems col-3 row">
    //         {data?.map((items) => {
    //           const poster=items.poster_path ?
    //            url+ items.poster_path
    //           :PosterFallback
    //           const rating = items.vote_average.toFixed(1);
    //           return (
    //             <div
    //               key={items.id}
    //               className="carouselItem"
    //               onClick={() =>
    //                 navigate(
    //                   `${items.media_type ? items.media_type : endpoint}/${
    //                     items.id
    //                   }`
    //                 )
    //               }
    //             >
    //               <div className="posterBlock">
    //                 <img src={poster} alt="fd" />
    //                 <Img className="movieimg" src={poster} />
    //                 <CircleRating rating={rating} />
    //                 {/* <Genres data={items?.genre_ids.slice(0,3)}/> */}
    //               </div>
    //               <div className="textBlock">
    //                 <span className="title">{items.title || items.name}</span>
    //                 <span className="date">
    //                   {/* {dayjs(items.release_date).format("MMM D,YYYY")} */}
    //                 </span>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     ) : (
    //       <div className="loadingSkeleton">
    //         <h1 className="text-light">snflskndflk</h1>
    //         {skItem()}
    //         {skItem()}
    //         {skItem()}
    //         {skItem()}
    //         {skItem()}
    //       </div>
    //     )}
    // </div>
  );
};

export default Carousel;
