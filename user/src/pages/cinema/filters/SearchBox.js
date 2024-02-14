import React, { useContext } from 'react'
import MovieContext from '../../../context/Moviecontext';
import "./SearchBox.css"

const SearchBox = () => {
    const {setQuery}=useContext(MovieContext)
    let HandleCinemaSearch=(e)=>{
        const inputValue = e.target.value;
        setQuery(inputValue);
    }
  return (
    <div className='filter-box'>
        <div className='input-field'>
       <input type="text" className="form-control" placeholder="Search Cinema"  onChange={HandleCinemaSearch} />
      <span className='icon'>
       <i class="fa-solid fa-magnifying-glass"></i>
      </span>

        </div>
    </div>
  )
}

export default SearchBox
