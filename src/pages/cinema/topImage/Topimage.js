import React from 'react'
import Img from '../../../components/lazyLoading/Img'
import "./Topimage.css"
import { useNavigate, useParams } from 'react-router-dom';

function Topimage({data}) {
  const url = "https://image.tmdb.org/t/p/original";
  const navigate=useNavigate();
  const { id }=useParams()
  return (
    <div className='topimage'>
    {data && (
        <>
          <div className="backdrop-img-cinema">
            <Img src={url + data.backdrop_path}></Img>
          </div>
          <span onClick={()=>navigate(`/details/${id}`)} className='title'>{data.name || data.title}</span>
        </>
    )
    }
    </div>
  )
}

export default Topimage
