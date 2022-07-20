import React from 'react';
import './Search.css';
import SearchResult from '../search_result/SearchResult';
import Data from '../Data.json';

const Search = ({placeholder}) => {
    return (
        <>
            <div className="search">
                <div className="search-input">
                    <input type="text" placeholder={placeholder}></input> {/*Can have data field: data = {Data}*/}
                </div>
            </div>
            <SearchResult data={Data}/>
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
