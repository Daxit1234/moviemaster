import React from 'react'
import "./Genres.css"

function Genres({genresid}) {
   let genres={
        '12': {
          id: 12,
          name: 'Adventure'
        },
        '14': {
          id: 14,
          name: 'Fantasy'
        },
        '16': {
          id: 16,
          name: 'Animation'
        },
        '18': {
          id: 18,
          name: 'Drama'
        },
        '27': {
          id: 27,
          name: 'Horror'
        },
        '28': {
          id: 28,
          name: 'Action'
        },
        '35': {
          id: 35,
          name: 'Comedy'
        },
        '36': {
          id: 36,
          name: 'History'
        },
        '37': {
          id: 37,
          name: 'Western'
        },
        '53': {
          id: 53,
          name: 'Thriller'
        },
        '80': {
          id: 80,
          name: 'Crime'
        },
        '99': {
          id: 99,
          name: 'Documentary'
        },
        '878': {
          id: 878,
          name: 'Science'
        },
        '9648': {
          id: 9648,
          name: 'Mystery'
        },
        '10402': {
          id: 10402,
          name: 'Music'
        },
        '10749': {
          id: 10749,
          name: 'Romance'
        },
        '10751': {
          id: 10751,
          name: 'Family'
        },
        '10752': {
          id: 10752,
          name: 'War'
        },
        '10759': {
          id: 10759,
          name: 'Action & Adventure'
        },
        '10762': {
          id: 10762,
          name: 'Kids'
        },
        '10763': {
          id: 10763,
          name: 'News'
        },
        '10764': {
          id: 10764,
          name: 'Reality'
        },
        '10765': {
          id: 10765,
          name: 'Sci-Fi'
        },
        '10766': {
          id: 10766,
          name: 'Soap'
        },
        '10767': {
          id: 10767,
          name: 'Talk'
        },
        '10768': {
          id: 10768,
          name: 'War'
        },
        '10770': {
          id: 10770,
          name: 'TV Movie'
        }
      }
  return (
      <div className='genres'>
         {genresid?.map((g)=>{
          return(
              <div key={g} className="genre">
                  {genres[g]?.name}
              </div>
          )
         })}
      </div>
  )
}

export default Genres
