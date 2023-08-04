import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning REDUX", content: "redux used for state management" },
    { id: "2", title: "Creating projects", content: "working on multiple projects" }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
});
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;