import React, { useContext } from 'react'
import HeroBannerr from './herroBenner/HeroBannerr'
import NewMovie from './newMovie/NewMovie'
import MovieContext from '../../context/Moviecontext'

function Home() {
  const {details}=useContext(MovieContext)
  return (
    <div>
       <HeroBannerr/>
       <NewMovie/>
    </div>
  )
}

export default Home
