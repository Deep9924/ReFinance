import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth } from "../../../firebase/AuthContext";
const ProfileContext = createContext();

export function useProfile() {
	return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
	const { currentUser } = useAuth();
	const [userProfile, setUserProfile] = useState();
	const [userFav, setUserFav] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProfile = () => {
			currentUser &&
				axios
					.post(process.env.REACT_APP_LOCAL + "user", {
						user_email: currentUser.email.toLowerCase(),
					})
					.then((res) => {
						setUserProfile(res.data);
						setUserFav(res.data.favourites);
					})
					.catch((err) => console.log(err));
			setLoading(false);
		};
		return getProfile;
	}, [currentUser]);

	function handleAdd(stockName) {
		setUserFav((prev) => [...prev, stockName]);
		axios
			.post(process.env.REACT_APP_LOCAL + "fav/addfav", {
				user_email: currentUser.email.toLowerCase(),
				user_favstock: stockName,
			})
			.catch((err) => console.log(err));
	}

	function addToFavourites(stockName) {
		return userProfile && !userFav.includes(stockName) ? handleAdd(stockName) : "";
	}

	function handleRemove(stockName) {
		const filteredArray = userProfile && userFav.filter((item) => item !== stockName);
		setUserFav(filteredArray);
		axios
			.post(process.env.REACT_APP_LOCAL + "fav/removefav", {
				user_email: currentUser.email.toLowerCase(),
				user_favstock: stockName,
			})
			.catch((err) => console.log(err));
	}

	function removeFromFavourites(stockName) {
		return userProfile && handleRemove(stockName);
	}

	const value = {
		userProfile,
		userFav,
		addToFavourites,
		removeFromFavourites,
	};

	return <ProfileContext.Provider value={value}>{!loading && children}</ProfileContext.Provider>;
}

//return userFav.includes(symbol) ?  :
/* if (!userData.includes(symbol)) {
      axios
        .post(process.env.REACT_APP_LOCAL + "fav/addfav", {
          user_email: currentUser.email.toLowerCase(),
          user_favstock: symbol
        })
        .then(() => {
          setRating(1)
        }
        )
        .catch((err) => console.log(err));
    }
    if (userData.includes(symbol)) {
      axios
        .post(process.env.REACT_APP_LOCAL + "fav/removefav", {
          user_email: currentUser.email.toLowerCase(),
          user_favstock: symbol
        })
        .then(() => {
          setRating(0)
        }
        )
        .catch((err) => console.log(err));
    } */
