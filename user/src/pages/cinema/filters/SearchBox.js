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
    const {setQuery}=useContext(MovieContext)
    const [city,setCity]=useState("")
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    let HandleCinemaSearch=(e)=>{
        const inputValue = e.target.value;
        setQuery(inputValue);
    }
  return (
    <div className='filter-box d-flex text-light'>
           <Box sx={{ minWidth: 120, marginRight: "50px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{ '& fieldset': { borderColor: 'white', color: 'white' }, '&:hover fieldset': { borderColor: 'white',color: 'white' } }}
        >
          <MenuItem value={10} >Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
