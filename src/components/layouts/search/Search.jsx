import React, { useState } from 'react';
import './Search.css';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchResult from '../search_result/SearchResult';

const Search = ({ placeholder, data}) => {
    const [ filteredData, setfilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");

    //console.log(Nasdaq.map((value, key) => value.Name));
    
    const handleFilter = (e) => {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.Name.toLowerCase().includes(searchWord.toLowerCase());
      });

      searchWord === "" ? setfilteredData([]) : setfilteredData(newFilter);
    }

    const clearBtn = () => {
        setfilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder={placeholder} value={ wordEntered } onChange={ handleFilter }></input> 
                <div className="search-icon">
                    { wordEntered.length === 0 ?  
                        <AiOutlineSearch/> 
                        : 
                        <AiOutlineClose id="clear-input-Btn" onClick={ clearBtn } /> 
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
