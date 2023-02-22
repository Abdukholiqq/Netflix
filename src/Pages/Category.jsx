import axios from 'axios';
import React, { useEffect } from 'react'

// function Category() {
//   return (
//     <div>Category</div>
//   )
// }

// export default Category;

export const  Films= () => {
  const category = 'popular'
useEffect(()=>{
const result = async ()=>{
  const data = await axios.get( 
    // `https://api.themoviedb.org/3/search/movie?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&query=magen&page=1&include_adult=false`
  );
  console.log(data);
}
},[])
}