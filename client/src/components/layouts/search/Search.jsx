import React, { useState } from 'react';
import './Search.css';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchResult from '../search_result/SearchResult';
import axios from 'axios';

const Search = ({ placeholder}) => {
    const [ filteredData, setfilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        
        axios.get(process.env.REACT_APP_LOCAL + `search?q=${searchWord}`)
            .then ((value) =>{
                searchWord === "" ? setfilteredData([]) : setfilteredData(value.data.q);
        });
    }

    const clearBtn = () => {
        setfilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <div className="search-input">
                <input type="text" className="search_input" placeholder={placeholder} value={ wordEntered } onChange={ handleFilter } ></input> 
                <div className="search-icon">
                    { wordEntered.length === 0 ?  
                        <AiOutlineSearch/> 
                        : 
                        <AiOutlineClose id="clear-input-Btn" onClick={ clearBtn }/> 
                    }
                </div>
            </div> 
            { filteredData.length !== 0 && (
                <SearchResult data={filteredData}/>
                )}
        </div>
    )
}

export default Search;
