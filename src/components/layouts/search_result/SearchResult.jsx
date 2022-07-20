import React from 'react';
import './SearchResult.css';

const SearchResult = ({data}) => {
    return (
        <div className="search-result">
                {data.map((value,key) => {
                    return  <div> {value.title} </div>;
                    //<a href={value.link} target="_blank"> {" "} {value.title} {" "}</a>;
                })}
        </div>
    )
}

export default SearchResult;
