import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import Favourites from "../../components/layouts/favourites/Favourites";
import { useDocumentTitle } from "../../components/layouts/Title/Title";
import { useAuth } from "../../firebase/AuthContext";

const Home = () => {
	useDocumentTitle("");
	const [homeNews, setHomeNews] = useState([]);
	const [stockData, setStockData] = useState();
	const [stockCandle, setStockCandle] = useState();
	const [stockInfoData, setStockInfoData] = useState([]);
	const { currentUser } = useAuth();
	const [userData, setUserData] = useState([]);
	const symbol = "AAPL";
	console.log(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=stock`)
	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=stock`)
			.then((res) => {
				setStockInfoData(res.data);
			})
			.catch((err) => console.log(err));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=data`)
			.then((res) => {
				setStockData(res.data.data.result.metric);
			})
			.catch((err) => console.log(err));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=candle`)
			.then((res) => setStockCandle(res.data.candle.result))
			.catch((err) => console.log(err));
	}, [symbol]);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + "homenews")
			.then((res) => setHomeNews(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (currentUser) {
			axios
				.post(process.env.REACT_APP_LOCAL + "user", {
					user_email: currentUser.email.toLowerCase(),
				})
				.then((res) => {
					setUserData(res.data.favourites);
				}) //console.log(res.data.favourites);
				.catch((err) => console.log(err));
		}
	}, [currentUser]);

	const news = homeNews.map((values, key) => {
		return (
			!values.summary && (
				<div key={key}>
					<NewsComp
						image={values.image}
						title={values.title}
						description={values.description}
						link={values.link}
						uploaded_datetime={values.uploaded_datetime / 1000}
					/>
				</div>
			)
		);
	});

	return (
		<div className='home_main'>
			<div className='mainhomepage'>
				<div className='graph_news'>
					<div className='home_graph'>
						<Graph symbol={symbol} stockData={stockData} stockCandle={stockCandle} stockInfoData={stockInfoData} userData={userData} />
					</div>
					<div className='home_news'>{news}</div>
				</div>
				<div className='favourite'>
					<Favourites symbol={symbol} />
				</div>
			</div>
		</div>
	);
};

export default Home;
