import React from "react";
import Favourites from "../../components/layouts/favourites/Favourites";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import company_news from "../../components/layouts/news_comp/company-news";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import "./News.css";

const News = () => {
	useDocumentTitle("- News");
	// values.image !== "" &&
	const news = company_news.slice(20, 25).map((values, key) => {
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
			<h1 className="news_title">Finance & Business News</h1>
			<div className='news_body'>
				<div className='news_favourites'>
					<Favourites />
				</div>
				<div className='news_container'>{news}</div>
			</div>
		</>
	);
};

export default News;
