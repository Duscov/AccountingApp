import {useState} from "react";
import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";


const Guest = () => {

    const [isSigIn, setIsSignIn] = useState(true)

    return (
        <div>
            {isSigIn ? <SignIn/> : <SignUp/>}
            <button
                onClick={() => setIsSignIn(prevState => !prevState)}
            >Switch to{isSigIn ? 'SignUp' : 'SignIn'}</button>
        </div>
    );
};

export default Guest;