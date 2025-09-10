import {createAsyncThunk} from "@reduxjs/toolkit";
import type {UserRegister} from "../../utils/type";


export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch("https://webaccounting.herokuapp.com/account/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        if (response.status === 409) {
            throw new Error(`User ${user.login} already exists`);
        }
        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.statusText}`)
        }

        return await response.json();
    }
)