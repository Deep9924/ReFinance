import React from 'react';
import './News_comp.css';
//import company_news from './company-news';

const NewsComp = (props) => {

  const { image, headline, summary, url } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news_card" >

        <div className={image === "" ? '' : 'news_image'}>
          <img src={image} alt="" />
        </div>

        <div className='news_text'>
          <div className='headline'>
            <h3>
              {headline}
            </h3>
          </div>

          <div className='summary'>
            <p>{summary}</p>
          </div>
        </div>

      </div>
    </a>
  )
}


export default NewsComp;