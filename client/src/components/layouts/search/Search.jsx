import React, { useState, useEffect, useRef } from 'react';
import './Search.css';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchResult from '../search_result/SearchResult';


const Search = ({ placeholder}) => {
    const [ filteredData, setfilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");
    const navigate = useNavigate();

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

    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && filteredData[0] != null){
          navigate("/stock", { state: {symbol: filteredData[0].Symbol} })
          setfilteredData([]);
        }
    }

    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setfilteredData([]);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
        
    });

    return (
        <div ref={menuRef} className="search">
            <div className="search-input">
                <input type="text" className="search_input" placeholder={placeholder} value={ wordEntered } onChange={ handleFilter } onKeyPress={ handleKeyPress }></input> 
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
