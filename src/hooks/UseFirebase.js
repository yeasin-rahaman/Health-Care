import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState, } from "react";
import firebaseInitialization from "../firebase/firebase.init";

firebaseInitialization();
// google provider 
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    // get email
    const getName = (event) => {
        setName(event?.target?.value)


    }
    // get name
    const getEmail = (event) => {
        setEmail(event?.target?.value)

    }
    // get password 
    const getPassword = (event) => {
        setPassword(event?.target?.value)

    }


    // google sign in 
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setError(error.message);
            });
    }

    // gitHub sign in 
    const signInWithGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setError(error.message);
            });
    }
    // Email  sign in 
    const signInWithEmail = (event) => {
        console.log(email, password)
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setError(error.message);
            });
    }


    // get the currently signed-in user 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    // sign Out 

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})

        }).catch(() => {
            setError(error.message)
        });
    }

    // sign up with email
    const signUp = () => {
        console.log(email, password)
        // setUser(email, password)
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {

                setNameAndImage()
                alert("user been created")
            }).catch(error => {
                setError(error.message)
            })
    }

    // set use name
    const setNameAndImage = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((error => {
            setError(error.message)
        }))
    }

    return {
        signInWithGoogle,
        signInWithGitHub,
        signInWithEmail,
        user,
        error,
        logOut,
        getPassword,
        getEmail,
        signUp,
        getName

    }
};

export default UseFirebase;