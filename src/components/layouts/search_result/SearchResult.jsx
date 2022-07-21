import React from 'react';
import './SearchResult.css';

const SearchResult = ({data, query}) => {
    return (
        <div className="search-result">
        {data.map((data) => ( <div className="card"> {data.title} </div>))}
        </div>
    )
}

/*<div className="search-result">
{data.map((data) => (    <p> {data.title} </p>))}
            
</div> */
//{data.filter((data) => data.author.toLowerCase().includes(data)).map((data) => (    <p> {data.title} </p>))}
export default SearchResult;