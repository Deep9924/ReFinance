import { useDocumentTitle } from "../../components/layouts/Title/Title";
import React from "react"; //,  { useState, useEffect }
import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material"; //Button
import { useAuth } from "../../firebase/AuthContext";
import GraphFav from "../../components/layouts/graph/Graph_Fav";
//import axios from "axios";

const Favourites = () => {
	useDocumentTitle("- Favourites");
	const { userProfile } = useAuth(); //currentUser,
	//const [userData, setUserData] = useState([]);

	/* useEffect(() => {
    axios
		.post(process.env.REACT_APP_LOCAL + "user", {
			user_email: currentUser.email.toLowerCase()
		})
		.then((res) => {  setUserData(res.data.favourites); })
		.catch((err) => console.log(err));
  }, [currentUser.email]) */

	return (
		<List>
			<Typography variant='h6' sx={{ ml: 2, mb: -1, fontWeight: "bold" }}>
				Favourites
			</Typography>
			{userProfile && userProfile.favourites.length === 0 ? (
				<List>
					<ListItem sx={{ mt: "3rem" }}>
						<Typography variant='body2' sx={{ ml: 1.4, fontWeight: "bold" }}>
							Add a stock to favourites to display here
						</Typography>
					</ListItem>
				</List>
			) : (
				userProfile &&
				userProfile.favourites.map((stockName) => {
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
