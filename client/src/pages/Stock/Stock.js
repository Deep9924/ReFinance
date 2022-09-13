import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Graph from "../../components/layouts/graph/Graph";
import sym from "../../components/layouts/graph/interval";
import NotFound from "../../components/layouts/notFound/NotFound";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import axios from "axios";
import "./Stock.css";
import Favourites from "../../components/layouts/favourites/Favourites";
import NewsComp from "../../components/layouts/news_comp/News_comp";


const Stock = () => {
	useDocumentTitle("- Stock");
	const [newsArticles, setNewsArticles] = useState([]);
	const { state } = useLocation();

	if (state == null) {
		return <NotFound />;
	}

	// values.image !== "" &&
	//const symbol = "AAPL";
	axios
		.get(process.env.REACT_APP_LOCAL + `news?id=${state.symbol}`)
		.then((response) => {
			setNewsArticles(response.data.news.result);
		})
		.catch((err) => console.log(err));
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
			<div>
				<h1>Hello Stock</h1>
				<p>{state.symbol}</p>
				<Graph symbol={sym} />
			</div>
			<div>
				<h1 className='news_title'>Finance & Business News</h1>
				<div className='news_body'>
					<div className='news_favourites'>
						<Favourites />
					</div>
					<div className='news_container'>{articles}</div>
				</div>
			</div>
		</>
	);
};

export default Stock;
