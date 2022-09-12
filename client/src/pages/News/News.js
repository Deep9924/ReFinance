import React, { useState } from "react";
import Favourites from "../../components/layouts/favourites/Favourites";
import NewsComp from "../../components/layouts/news_comp/News_comp";
//import company_news from "../../components/layouts/news_comp/company-news";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import "./News.css";
import axios from "axios";

const News = () => {
	useDocumentTitle("- News");
	const [news, setNews] = useState([]);
	// values.image !== "" &&
	const sym = "AAPL";
	axios
		.get(process.env.REACT_APP_LOCAL + `news?id=${sym}`)
		.then((response) => {
			setNews(response.data);
			//console.log(response.data.news.result)
		})
		.catch((err) => console.log(err));
	// const news = company_news.slice(20, 25).map((values, key) => {
		const newss = news.map((values, key) => {
			
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
				</div>
			)
		);
	});
	return (
		<>
			<h1 className='news_title'>Finance & Business News</h1>
			<div className='news_body'>
				<div className='news_favourites'>
					<Favourites />
				</div>
				<div className='news_container'>{newss}</div>
			</div>
		</>
	);
};

export default News;
