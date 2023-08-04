import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning REDUX", content: "redux used for state management" },
    { id: "2", title: "Creating projects", content: "working on multiple projects" }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsAdded(state, action) {
            state.push(action.payload);
        }

    }
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
