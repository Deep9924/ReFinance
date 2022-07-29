import React, { useState } from 'react';
import './Search.css';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchResult from '../search_result/SearchResult';

const Search = ({ placeholder, data}) => {
    const [ filteredData, setfilteredData ] = useState([]);
    const [ wordEntered, setWordEntered ] = useState("");
    //const [ isShown, setIsShown ] = useState();
    
    const handleFilter = (e) => {
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return ( (value.Symbol.toLowerCase().includes(searchWord.toLowerCase())) || value.Name.toLowerCase().includes(searchWord.toLowerCase()) );
      });

      searchWord === "" ? setfilteredData([]) : setfilteredData(newFilter);
    }

    const clearBtn = () => {
        setfilteredData([]);
        setWordEntered("");
    }
    /*
    const hideSearchResult = event => {
        setIsShown(isShown => false);
    }

    const showSearchResult = event => {
        setIsShown(isShown => true);
    }
    */ 
    return (
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder={placeholder} value={ wordEntered } onChange={ handleFilter } ></input> 
                <div className="search-icon">
                    { wordEntered.length === 0 ?  
                        <AiOutlineSearch/> 
                        : 
                        <AiOutlineClose id="clear-input-Btn" onClick={ clearBtn }/> 
                    }
                </div>
            </div> 
            <div > {//style={{display: isShown ? '' : 'none'}}
            }
                { filteredData.length !== 0 && (
                    <SearchResult data={filteredData}/>
                )}
            </div>
        </div>
    )
}

export default Search;
