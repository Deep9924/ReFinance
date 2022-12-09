/* import React, { useContext, useState, useEffect, createContext } from "react";
//import axios from "axios";
import { useAuth } from "../../../firebase/AuthContext";
const UserFavouritesContext = createContext();

export function useFavourites() {
	return useContext(UserFavouritesContext);
}

export function FavouritesContext({ children }) {
	const { currentUser, userProfile } = useAuth();
	const [userFavourites, setUserFavourites] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = () => {
			currentUser && setUserFavourites(userProfile.favourites);
			setLoading(false);
		};
		return unsubscribe;
	}, [userProfile]);

	function addToFavourites(stockName) {
		return currentUser && (!userFavourites.includes(stockName) ? setUserFavourites((prev) => [...prev, stockName]) : "");
	}

	function removeFromFavourites(stockName) {
		var filteredArray;
		return currentUser && ((filteredArray = userFavourites.filter((item) => item !== stockName)), setUserFavourites(filteredArray));
	}

	const value = {
		userFavourites,
		addToFavourites,
		removeFromFavourites,
	};

	return <UserFavouritesContext.Provider value={value}>{!loading && children}</UserFavouritesContext.Provider>;
} */

/* axios
					.post(process.env.REACT_APP_LOCAL + "user", {
						user_email: currentUser.email.toLowerCase(),
					})
					.then((res) => {
						setUserFavourites(res.data.favourites);
					})
					.catch((err) => console.log(err)); */

/* 
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			user &&
				axios
					.post(process.env.REACT_APP_LOCAL + "user", {
						user_email: user.email.toLowerCase(),
					})
					.then((res) => {
						//console.log(res.data);
						setUserProfile(res.data);
					})
					.catch((err) => console.log(err));
			setLoading(false);
		});
		return unsubscribe;
	}, []);
 */
