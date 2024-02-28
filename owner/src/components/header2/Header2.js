import React from 'react'
import "./Header2.css"

const Header2 = ({page}) => {
  return (
       <div className="nav d-flex justify-content-between">
            <div className="nav-item d-flex">{page}</div>
            <div className='right-nav d-flex'>
                <div className='mx-3'><i class="fa-solid fa-house"></i>  Home </div>
                <div><i class="fa-solid fa-chevron-right"></i></div>
                <div className='mx-3'>{page}</div>
            </div>
        </div>
  )
}

export default Header2
