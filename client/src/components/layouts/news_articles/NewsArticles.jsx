import React, { useState } from "react";
//import NewsComp from "../../components/layouts/news_comp/News_comp";
import NewsComp from "../news_comp/News_comp";
import axios from "axios";

const NewsArticles = (symbol) => {
	const [newsArticles, setNewsArticles] = useState([]);
	// values.image !== "" &&
	const sym = symbol.symbol;
	axios
		.get(process.env.REACT_APP_LOCAL + `news?id=${sym}`)
		.then((response) => {
			setNewsArticles(response.data.news.result);
		})
		.catch((err) => console.log(err));
	// const news = company_news.slice(20, 25).map((values, key) => {
		
	newsArticles.slice(0, 10).map((values, key) => {
		return (
			values.summary !== "" && (
				<div key={key}>
					<NewsComp image={values.image} headline={values.headline} summary={values.summary} url={values.url} />
				</div>
			)
		);
	});
};

export default NewsArticles;
