import React, { useEffect, useState } from 'react'
import Img from '../../../components/lazyLoading/Img'
import "./Topimage.css"
import { useNavigate, useParams } from 'react-router-dom';


function Topimage({data,id}) {
  const url = "https://image.tmdb.org/t/p/original";
  const navigate=useNavigate();

  return (
    <div className='topimage'>
    {data && (
        <>
          <div className="backdrop-img-cinema">
            <Img src={url +data?.backdrop_path} ></Img>
          </div>
          <div className="opacity-layer"></div>

          <span onClick={()=>navigate(`/details/${id}`)} className='title'>{data.name || data.title}</span>
        </>
    )
    }
    </div>
  )
}

export default Topimage
