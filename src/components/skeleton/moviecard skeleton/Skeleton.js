import React from 'react'
import "./Skeleton.css"

const SkeletonItem = () => {
  return (
    <div className='col-md-2 col-6'>
    <div style={{backgroundColor:"rgb(4,21,45)"}} className='card-skeleton mt-4'>
    </div>
    </div>
  )
}

export default SkeletonItem
