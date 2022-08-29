import "./App.css";
import React from "react"; //, useState
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact, Favourites, Home, News, Stock } from "./pages";
import Navbar from "./components/layouts/navbar";
import IndexScroll from "./components/layouts/index_scroll/IndexScroll";
import Footer from "./components/layouts/footer/Footer";
import NotFound from "./components/layouts/notFound/NotFound";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<IndexScroll />
				<div className='main-body'>
					<div className='navigation'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/favourites' element={<Favourites />} />
							<Route path='/news' element={<News />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/stock' element={<Stock />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
