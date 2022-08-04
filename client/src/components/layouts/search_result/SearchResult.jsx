import React from 'react';
import './SearchResult.css';

const SearchResult = ({data}) => {
    const link = `https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_STOCK_TOKEN}&symbols=`
    return (
        <div className="search-result">
        {data.slice(0, 15).map((value, key) => { return ( <div className="card" key={key}> <a href= {link + value.Symbol}> {value.Symbol + " | " +value.Name} </a> </div>); })}
        </div>
    )
}

// What does slice do
/*<div className="search-result">
{data.map((data) => (    <p> {data.title} </p>))}
            
</div> */
//{data.filter((data) => data.author.toLowerCase().includes(data)).map((data) => (    <p> {data.title} </p>))}
export default SearchResult;