import React, { useState, useEffect } from "react"; //, useEffect
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
	const { state } = useLocation();	
	const [newsArticles, setNewsArticles] = useState([]);

	useEffect(() => {
		if (state !== null){
			axios.get(process.env.REACT_APP_LOCAL + `news?id=${state.symbol}`)
			.then(response => {
				setNewsArticles(response.data.news.result);
			})
			.catch((err) => console.log(err));
		}
	}, [state]);
	
	if (state == null) {
		return <NotFound />;
	}

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
