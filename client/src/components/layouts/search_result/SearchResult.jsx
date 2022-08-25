import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = ({data}) => {
    const [isclicked, setIsClicked] = useState(true);
    
    //const link = `https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_STOCK_TOKEN}&symbols=`
    const handlefilter = () => {
        data = [];
        setIsClicked(!isclicked);
    }

    return (
        <>
            <div className={ isclicked ? "" : "notShow" }>
                <div className="search-result">
                {data.slice(0, 15).map((value, key) => { return ( <div className="card" key={key}> <NavLink to= {'/stock'} state={{symbol: value.Symbol}} onClick={handlefilter}> {value.Symbol + " | " + value.Name} </NavLink> </div>); })}
                </div>
            </div>
        </>
    )
}


//{data.filter((data) => data.author.toLowerCase().includes(data)).map((data) => (    <p> {data.title} </p>))}
export default SearchResult;