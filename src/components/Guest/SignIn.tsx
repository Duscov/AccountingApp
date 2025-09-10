import {useState} from "react";


    const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleClickSignIn = () => {
        //TODO use Dispatch
    }
    const handleClickClear = () => {
        setPassword("");
        setLogin("");
    }


    return (
        <div>
            <label>Login:
                <input
                    type={'text'}
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    type={'text'}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button onClick={handleClickSignIn}>Sign In</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default SignIn;