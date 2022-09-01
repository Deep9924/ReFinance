import React from "react";
import Favourites from "../../components/layouts/favourites/Favourites";
import NewsComp from "../../components/layouts/news_comp/News";
import company_news from "../../components/layouts/news_comp/company-news";
import "./News.css";

const News = () => {
	const news = company_news.slice(15, 25).map((values, key) => {
		return (
			values.image !== "" && (
				<div key={key}>
					<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
				</div>
			)
		);
	});
	return (
		<>
			<h1>Hello News</h1>
			<div>
				<div className='news_container'>{news}</div>
				<div>
					<Favourites />
				</div>
			</div>
		</>
	);
};

export default News;
