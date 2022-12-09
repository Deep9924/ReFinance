import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "./firebase-config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	setPersistence,
	browserSessionPersistence,
} from "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return setPersistence(auth, browserSessionPersistence)
			.then(() => {
				signInWithEmailAndPassword(auth, email, password);
			})
			.catch((error) => {
				console.log(error);
				/* const errorCode = error.code;
    const errorMessage = error.message; */
			});
		//return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
