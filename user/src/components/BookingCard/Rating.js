import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function BasicRating({value,setValue}) {

  const handleRatingChange = (event, newValue) => {
    setValue(newValue); 
  };

  return (
    <>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={handleRatingChange}
    />
    </>
  );
}
