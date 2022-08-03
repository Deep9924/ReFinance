import React from 'react';
import './SearchResult.css';

const SearchResult = ({data}) => {
    return (
        <div className="search-result">
        {data.slice(0, 15).map((value, key) => { return ( <div className="card" key={key}> <a href= {`https://cloud.iexapis.com/stable/stock/${value.Symbol}/news?token=${process.env.REACT_APP_STOCK_TOKEN}`}> {value.Symbol + " | " +value.Name} </a> </div>); })}
        </div>
    )
}

// What does slice do
/*<div className="search-result">
{data.map((data) => (    <p> {data.title} </p>))}
            
</div> */
//{data.filter((data) => data.author.toLowerCase().includes(data)).map((data) => (    <p> {data.title} </p>))}
export default SearchResult;