import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { registerUser } from "../../features/api/accountApi";
import { useNavigate } from "react-router";

const SignUp = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { user, loading, error } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickClear = () => {
        setLogin("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleClickSignUp = () => {
        if (!login || !password || !confirmPassword) {
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        dispatch(registerUser({ login, password }));
    };

    useEffect(() => {
        if (user?.login) {
            navigate("/profile");
        }
    }, [user, navigate]);

    return (
        <div>
            <h2>Sign Up</h2>
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
            <label>
                Confirm Password:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>

            <button onClick={handleClickSignUp} disabled={loading}>
                {loading ? "Signing up..." : "Sign Up"}
            </button>
            <button onClick={handleClickClear}>Clear</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignUp;
