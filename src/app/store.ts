import {configureStore} from '@reduxjs/toolkit'
import tokenSlice from "../features/token/tokenSlice";
import userSlice from "../features/user/userSlice";
import {UserProfile} from "../utils/type";



export const store = configureStore({
    reducer: {
        userSlice, tokenSlice
    },
    preloadedState: JSON.parse(localStorage.getItem('state') || '{}') as {user:UserProfile, token:string}
})
store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch