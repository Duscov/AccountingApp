import {createSlice} from "@reduxjs/toolkit";
import {registerUser} from "../api/accountApi.ts";
import type {UserProfile} from "../../utils/type";

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserProfile,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (_state, action) => action.payload)

        }
})

export default userSlice.reducer;
