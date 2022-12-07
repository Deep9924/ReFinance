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
						//console.log(res.data);
						setUserProfile(res.data);
					})
					.catch((err) => console.log(err));
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
		userProfile,
	};

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
