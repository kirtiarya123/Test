import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"
import axios from "axios"

import "./search.css";


const Search = () => {
 const[value,setValue]=useState('')
 const[result,setResult] = useState([]);
useEffect(async ()=>{
 const response = await axios.get("https://api.tvmaze.com/search/shows?q=stand");
  console.log(response.data);
 const data =[{id:1,score:10}];
  setResult(data[0]);
  console.log(">>>",result);
},[result]);

console.log(result);
 return (

   
    <div className="input-wrapper">
      	<title>Search Box</title>
      <FaSearch id="search-icon" />
      {/* <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      /> */}
     {/* {/* {result.map((ele,index)=>(
      <p>ele.scores</p>
     )) */}
   
         
    </div>
      

  

    
  );

};
export default Search