import React from "react";
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News";
import Favourites from "../../components/layouts/favourites/Favourites";
import sym from "../../components/layouts/graph/interval";
import company_news from "../../components/layouts/news_comp/company-news";

const Home = () => {
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
		<div>
			<div className='mainweb'>
				<div className='graph'>
					<Graph symbol={sym} />
				</div>

				<div className='news'>{news}</div>

				<div className='favourite'>
					<Favourites />
				</div>

				<div className='footer'></div>
			</div>
		</div>
	);
};

export default Home;
