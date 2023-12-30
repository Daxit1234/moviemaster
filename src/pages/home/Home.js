import React, { useContext } from 'react'
import HeroBannerr from './herroBenner/HeroBannerr'
import Popular from './popular/Popular'
import MovieContext from '../../context/Moviecontext'

function Home() {
  const {details}=useContext(MovieContext)
  console.log(details)
  return (
    <div>
       <HeroBannerr/>
       <Popular/>
    </div>
  )
}

export default Home
