import React, { useContext } from 'react'
import MovieContext from '../../../context/Moviecontext';
import "./SearchBox.css"
import { useState } from 'react';
import CityModel from '../../../components/Models/CityModel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchBox = () => {
    const {setQuery,city,setCity,showType,setShowType}=useContext(MovieContext)

    const handleChangeCity = (event) => {
      setCity(event.target.value);
    };
    const handleChangeShowType = (event) => {
      setShowType(event.target.value);
    };
    let HandleCinemaSearch=(e)=>{
        const inputValue = e.target.value;
        setQuery(inputValue);
    }
  return (
    <div className='filter-box text-light'>
           <Box sx={{ minWidth: 120, marginRight: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>ShowType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={showType}
          label="ShowType"
          onChange={handleChangeShowType}
          sx={{color:'white', '& fieldset': { borderColor: 'white',border:"1px solid white" }, '&:hover fieldset': { borderColor: 'white' } }}
        >
          <MenuItem value="allShow"  >All Show</MenuItem>
          <MenuItem value="2d"  >2D</MenuItem>
          <MenuItem value="3d">3D</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
           <Box sx={{ minWidth: 120, marginRight: "50px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChangeCity}
          sx={{color:'white', '& fieldset': { borderColor: 'white',border:"1px solid white" }, '&:hover fieldset': { borderColor: 'white' } }}
        >
          <MenuItem value="allCity"  >All City</MenuItem>
          <MenuItem value="surat"  >Surat</MenuItem>
          <MenuItem value="ahmadabad">Ahmadabad</MenuItem>
          <MenuItem value="pune">Pune</MenuItem>
          <MenuItem value="chennai">Chennai</MenuItem>
        </Select>
      </FormControl>
    </Box>
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
