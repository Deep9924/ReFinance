import React from "react";
import Graph from "../../components/layouts/graph/Graph";
import { useDocumentTitle } from "../../components/layouts/title/Title";
import sym from "../../components/layouts/graph/interval";
import "./Favourites.css";

const Favourites = () => {
	useDocumentTitle("- Favourites");
	return (
		<>
			<h1>Hello Fav</h1>
			<Graph symbol={sym} />
		</>
	);
};

export default Favourites;
