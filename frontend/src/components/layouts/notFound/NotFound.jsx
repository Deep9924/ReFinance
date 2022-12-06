import React from 'react';
import Search from "../Search/Search";
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <h3>404</h3>
      <h2>We couldn't understand your request, please try again, or search for new stock </h2>
      <div className='search_div'>
        <h3 className='search_inline'> TRY A NEW SEARCH: </h3>
        <div className='search_bar'>
          <Search placeholder={"Enter name or symbol..."} />
        </div>
      </div>
    </div>
  )
}

export default NotFound