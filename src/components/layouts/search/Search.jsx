import React, { useState } from 'react';
import './Search.css';
import SearchResult from '../search_result/SearchResult';


const Search = ({placeholder, data}) => {
    const  [query, setQuery] = useState("");

    return (
        <>
            <div className="search">
                <div className="search-input">
                    <input type="text" placeholder={placeholder} onChange={e=> setQuery(e.target.value)}></input> {/*Can have data field: data = {Data}*/}
                </div>
            </div>
        </>
    )
}
/*
<div className="search-result">
                {data.map((value,key) => {
                    return  <div> {value.title} </div>;
                    //<a href={value.link} target="_blank"> {" "} {value.title} {" "}</a>;
                })}
            </div>
*/

export default Search;
