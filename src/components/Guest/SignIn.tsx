import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "../../features/api/accountApi";
import { useNavigate } from "react-router";

const SignIn = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    // достаём сразу все нужные поля
    const { user, loading, error } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickClear = () => {
        setLogin("");
        setPassword("");
    };

    const handleClickSignIn = () => {
        if (!login || !password) {
            return;
        }
        dispatch(loginUser({ login, password }));
    };

    useEffect(() => {
        if (user?.login) {
            navigate("/profile");
        }
    }, [user, navigate]);

    return (
        <div>
            <h2>Sign In</h2>
            <label>
                Login:
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <button onClick={handleClickSignIn} disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
            </button>
            <button onClick={handleClickClear}>Clear</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignIn;
