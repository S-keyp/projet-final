import { auth } from '../../../firebase.config'
import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const UserContext = createContext()

export default function UserContextProvider( { children } ) {
	
	const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

	const signIn = (email, password)  => signInWithEmailAndPassword(auth, email, password)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser)
			setLoadingData(false)
		})

		return unsubscribe
	}, [])

    return (
        <UserContext.Provider value={{ currentUser, signIn }}>
            { !loadingData && children }
        </UserContext.Provider>
    )
} 