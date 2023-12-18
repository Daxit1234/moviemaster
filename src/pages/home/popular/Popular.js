import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function Popular() {
    const {data,loading}=useFetch(`/movie/popular`)

  return (
    <div className='carouselSection'>
       <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
      </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/> 
    </div>
  )
}

export default Popular
