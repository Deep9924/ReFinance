import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stock.css";
import { Navigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "../../components/layouts/Title/Title";
import { Typography, Box } from "@mui/material";
import Graph from "../../components/layouts/graph/Graph";
import NewsComp from "../../components/layouts/news_comp/News_comp";
import Favourites from "../../components/layouts/favourites/Favourites";

const Stock = () => {
	useDocumentTitle("- Stock");
	const { symbol } = useParams();
	const [homeNews, setHomeNews] = useState([]);
	const [stockData, setStockData] = useState();
	const [stockNews, setStockNews] = useState([]);
	const [stockCandle, setStockCandle] = useState();
	const [stockInfoData, setStockInfoData] = useState([]);
	const [validURL, setValidURL] = useState(true);
	const sym = symbol.toUpperCase();

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${sym}&field=stock`)
			.then((res) => {
				setStockInfoData(res.data);
			})
			.catch((err) => (err.response.status === 400 ? setValidURL(false) : "")); //(err) => console.log(err.response.status)
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${sym}&field=data`)
			.then((res) => {
				setStockData(res.data.data.result.metric);
			})
			.catch((err) => (err.response.status === 400 ? setValidURL(false) : ""));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${sym}&field=news`)
			.then((res) => {
				setStockNews(res.data.news.result);
			})
			.catch((err) => (err.response.status === 400 ? setValidURL(false) : ""));
		axios
			.get(process.env.REACT_APP_LOCAL + `stock?id=${sym}&field=candle`)
			.then((res) => setStockCandle(res.data.candle.result))
			.catch((err) => (err.response.status === 400 ? setValidURL(false) : ""));
	}, [sym]);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_LOCAL + "homenews")
			.then((res) => setHomeNews(res.data))
			.catch((err) => console.log(err));
	}, []);

	const topNews = homeNews.map((values) => {
		return (
			!values.summary && (
				<div key={values.title}>
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

	const news =
		stockNews &&
		stockNews.map((values) => {
			return (
				<div key={values.id}>
					<NewsComp image={values.image} title={values.headline} description={values.summary} link={values.url} uploaded_datetime={values.datetime} />
				</div>
			);
		});

	return validURL ? (
		<div className='stock_main'>
			<div className='mainstockpage'>
				<div className='stock_graph_news'>
					<div className='stock_graph'>
						<Graph symbol={sym} stockData={stockData} stockCandle={stockCandle} stockInfoData={stockInfoData} />
					</div>

					<div className='stock_news'>
						{stockNews.length === 0 ? (
							<Box>
								<Typography component='h1' variant='h5' sx={{ mb: 2 }}>
									No news found for this stock, but here is top news:
								</Typography>
								{topNews}
							</Box>
						) : (
							news
						)}
					</div>
				</div>
				<div className='favourite'>
					<Favourites />
				</div>
			</div>
		</div>
	) : (
		<Navigate to='/notfound' />
	);
};

export default Stock;
