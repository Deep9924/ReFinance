import React from "react";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import "./Favourites.css";

const Favourites = () => {
	useDocumentTitle("- Favourites");
	return <h1>Hello Fav</h1>;
};

export default Favourites;
