import React from 'react';
import Search from "../search/Search";

const NotFound = () => {
  return (
    <div>
      <h3>404</h3>
      <h2>Perhaps the URL is misspelled, you clicked a broken link or we removed the page. We apologize for that. If you have questions, please contact us.</h2>
      <h3> TRY A NEW SEARCH: </h3>

      <div>
        <Search />
      </div>
    </div>
  )
}

export default NotFound