import React, { useEffect, useState } from 'react'
import Img from '../../../components/lazyLoading/Img'
import "./Topimage.css"
import { useNavigate, useParams } from 'react-router-dom';
import MovieData from "../../home/Moviedata.json"


function Topimage({data}) {
  const url = "https://image.tmdb.org/t/p/original";
  const [dummyData, setDummyData] = useState(null);

  const navigate=useNavigate();
  useEffect(()=>{
    setDummyData(MovieData?.results.find(item => item.id === parseInt(id)))
  },[])
  const { id }=useParams()

  let newData= data?.AxiosError ? data  : dummyData  //remove collon in offline
  return (
    <div className='topimage'>
    {newData && (
        <>
          <div className="backdrop-img-cinema">
            <Img src={url +newData?.backdrop_path} ></Img>
          </div>
          <div className="opacity-layer"></div>

          <span onClick={()=>navigate(`/details/${id}`)} className='title'>{newData.name || newData.title}</span>
        </>
    )
    }
    </div>
  )
}

export default Topimage
