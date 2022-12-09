import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
import { Contact, Favourites, Home, Stock, Login } from "./pages";
import { Container } from "@mui/material";
import SignUp from "./components/layouts/SignUp/SignUp";
import { AuthProvider } from "./firebase/AuthContext";
import PrivateRoute from "./components/layouts/PrivateRouter.js/PrivateRoute";
import { AddStock, RemoveStock, AddNews, RemoveNews } from "./components/layouts/admin";
import NotFound from "./components/layouts/notFound/NotFound";
import { ProfileProvider } from "./components/layouts/context/ProfileContext";
//import { FavouritesContext } from "./components/layouts/context/FavouritesContext";

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<ProfileProvider>
						<Navbar />
						<div className='main-body'>
							<Container>
								<div className='navigation'>
									<Routes>
										<Route exact path='/' element={<Home />} />
										<Route path='/favourites' element={<Favourites />} />
										<Route path='/stock' element={<Navigate to='/notfound' />} />
										<Route path='/stock/:symbol' element={<Stock />} />
										<Route path='/contact' element={<Contact />} />
										<Route
											path='/login'
											element={
												<PrivateRoute>
													{" "}
													<Login />{" "}
												</PrivateRoute>
											}
										/>
										<Route
											path='/signup'
											element={
												<PrivateRoute>
													{" "}
													<SignUp />{" "}
												</PrivateRoute>
											}
										/>
										<Route path='/addstock' element={<AddStock />} />
										<Route path='/removestock' element={<RemoveStock />} />
										<Route path='/addnews' element={<AddNews />} />
										<Route path='/removenews' element={<RemoveNews />} />
										<Route path='/notfound' element={<NotFound />} />
										<Route path='/*' element={<Navigate to='/notfound' />} />
									</Routes>
								</div>
							</Container>
						</div>
					</ProfileProvider>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
