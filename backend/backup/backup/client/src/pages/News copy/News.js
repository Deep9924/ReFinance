import React, { useState, useEffect } from "react";
import Favourites from "../../components/layouts/favourites/Favourites";
import NewsComp from "../../components/layouts/news_comp/News_comp";
//import company_news from "../../components/layouts/news_comp/company-news";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import "./News.css";
import axios from "axios";

const News = () => {
	useDocumentTitle("- News");
	const [newsArticles, setNewsArticles] = useState([]);
	// values.image !== "" &&
	const sym = "AAPL";
	useEffect(() => {
		axios.get(process.env.REACT_APP_LOCAL + `news?id=${sym}`)
		.then(response => {
			setNewsArticles(response.data.news.result);
		})
		.catch((err) => console.log(err));
  }, []);
	
	// const news = company_news.slice(20, 25).map((values, key) => {
	//console.log(newsArticles)
	const articles = newsArticles.slice(0, 10).map((values, key) => {
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
				<div className='news_container'>{articles}</div>
			</div>
		</>
	);
};

export default News;

/* 

	useDocumentTitle("- News");
	const [newsArticles, setNewsArticles] = useState([]);
	// values.image !== "" &&
	const sym = "AAPL";
	useEffect(() => {
		axios.get(process.env.REACT_APP_LOCAL + `news?id=${sym}`)
		.then(response => {
			setNewsArticles(response.data.news.result);
		})
		.catch((err) => console.log(err));
  }, []);
	
	// const news = company_news.slice(20, 25).map((values, key) => {
	//console.log(newsArticles)
	const articles = newsArticles.slice(0, 10).map((values, key) => {
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
				</div>
			)
		);
	});

*/
