import "./Carousel.css";
import React from "react";
import PosterFallback from "../../assets/no-poster.png";
import MovieCard from "../movieCard/MovieCard";
import SkeletonItem from "../skeleton/Skeleton";

const Carousel = ({ data, loading}) => {
  const url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
        {!loading  && !data?.AxiosError ? (
          <>
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
                    genres={items.genre_ids}
                    id={items.id}
                />
            </div>
              );
            })}
          </>
        ) : (
          <>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
             <SkeletonItem/>
          </>
          
          
        )}
    </div>
  );
};

export default Carousel;
