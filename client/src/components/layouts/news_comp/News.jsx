import React from 'react';
import './News.css';
//import company_news from './company-news';

const NewsComp = (props) => {

  const { image, headline, summary, url } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news_card" >

        <div className='news_image'>
          <img src={image} alt="News" />
        </div>

        <div className='news_text'>
          <div className='headline'>
            {headline}
          </div>

          <div className='summary'>
            {summary}
          </div>
        </div>
        
      </div>
    </a>
  )
}


export default NewsComp;