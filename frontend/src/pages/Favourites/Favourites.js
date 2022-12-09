import { useDocumentTitle } from "../../components/layouts/Title/Title";
import React from "react"; //,  { useState, useEffect }
import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material"; //Button
import { useAuth } from "../../firebase/AuthContext";
import GraphFav from "../../components/layouts/graph/GraphFav";
//import axios from "axios";

const Favourites = () => {
	useDocumentTitle("- Favourites");
	const { userFav } = useAuth();

	return (
		<List>
			<Typography variant='h6' sx={{ ml: 2, mb: -1, fontWeight: "bold" }}>
				Favourites
			</Typography>
			{userFav && userFav.length === 0 ? (
				<List>
					<ListItem sx={{ mt: "3rem" }}>
						<Typography variant='body2' sx={{ ml: 1.4, fontWeight: "bold" }}>
							Add a stock to favourites to display here
						</Typography>
					</ListItem>
				</List>
			) : (
				userFav &&
				userFav.map((stockName) => {
					return (
						<div key={stockName}>
							<ListItem disablePadding>
								<ListItemText primary={stockName} />
								<GraphFav symbol={stockName} />
							</ListItem>
							<Divider />
						</div>
					);
				})
			)}
		</List>
	);
};

export default Favourites;
