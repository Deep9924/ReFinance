import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [userProfile, setUserProfile] = useState();
	const [userFav, setUserFav] = useState();
	const [loading, setLoading] = useState(true);

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
						setUserProfile(res.data);
						setUserFav(res.data.favourites);
					})
					.catch((err) => console.log(err));
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	function addToFavourites(stockName) {
		return userProfile && !userFav.includes(stockName) ? handleAdd(stockName) : "";
	}

	function removeFromFavourites(stockName) {
		return userProfile && handleRemove(stockName);
	}

	function handleAdd(stockName) {
		setUserFav((prev) => [...prev, stockName]);
		axios
			.post(process.env.REACT_APP_LOCAL + "fav/addfav", {
				user_email: currentUser.email.toLowerCase(),
				user_favstock: stockName,
			})
			.catch((err) => console.log(err));
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

	const value = {
		currentUser,
		signup,
		login,
		logout,
		userProfile,
		userFav,
		addToFavourites,
		removeFromFavourites,
	};

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
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
