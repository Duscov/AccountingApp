import {useState} from "react";
import {useAppDispatch} from "../../app/hooks";
import {fetchUser} from "../../features/api/accountApi";
import {createToken} from "../../utils/constants";


const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickSignIn = () => {
        dispatch(fetchUser(createToken(login, password)));
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
                    type={'password'}
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