import {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Guest = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    return (
        <div>
            {isSignIn ? <SignIn/> : <SignUp/>}
            <button
                onClick={() => setIsSignIn(prevState => !prevState)}
            >Switch to {isSignIn ? 'SignUp' : 'SignIn'}</button>
        </div>
    );
};

export default Guest;