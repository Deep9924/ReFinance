import React from 'react';
import './Favourites.css';

const Favourites = () => {
  return (
    <div className='favourites-container'>
      <h2>Favourites</h2>
      <div className='flexing'>
        <div className='index_scrolling'>
          <div class="first-part-fav">
            <div class="symbol-fav">Dow Jones 30</div>
            <div class="stock-price-fav">32726.82</div>
          </div>
          <div class="second-part-fav">
            <div class="percent-change-fav negative">-0.26%</div>
            <div class="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div class="first-part-fav">
            <div class="symbol-fav">Dow Jones 30</div>
            <div class="stock-price-fav">32726.82</div>
          </div>
          <div class="second-part-fav">
            <div class="percent-change-fav negative">-0.26%</div>
            <div class="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div class="first-part-fav">
            <div class="symbol-fav">Dow Jones 30</div>
            <div class="stock-price-fav">32726.82</div>
          </div>
          <div class="second-part-fav">
            <div class="percent-change-fav negative">-0.26%</div>
            <div class="price-change-fav negative">-85.68</div>
          </div>
        </div>
        <div className='index_scrolling'>
          <div class="first-part-fav">
            <div class="symbol-fav">Dow Jones 30</div>
            <div class="stock-price-fav">32726.82</div>
          </div>
          <div class="second-part-fav">
            <div class="percent-change-fav negative">-0.26%</div>
            <div class="price-change-fav negative">-85.68</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Favourites