import React from 'react';
import './Search.css';
//import SearchResult from '../search_result/SearchResult';     , { useState }
import { AiOutlineSearch } from 'react-icons/ai';


const Search = ({ placeholder, data }) => {
    //const  [query, setQuery] = useState("");

    return (
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder={placeholder} ></input> 
                <div className="search-icon">
                    <AiOutlineSearch />
                </div>
            </div>
            
        </div>
    )
}

/* {onChange={e=> setQuery(e.target.value)}  ///Can have data field: data = {Data}}*/
/*
<div> 
                <SearchResult data={query} />
            </div>

<div className="search-result">
                {data.map((value,key) => {
                    return  <div> {value.title} </div>;
                    //<a href={value.link} target="_blank"> {" "} {value.title} {" "}</a>;
                })}
            </div>
*/

export default Search;
