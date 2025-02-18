import { createSlice } from "@reduxjs/toolkit";

const captionsSlice = createSlice({
    name: "captions",
    initialState: {
        captions: [],
    },
    reducers: {
        setCaptions: (state, action) => {
            state.captions = action.payload;
        },
        addCaption: (state, action) => {
            state.captions.push(action.payload);
        },
        updateCaption: (state, action) => {
            const index = state.captions.findIndex((c) => c.id === action.payload.id);
            if (index !== -1) {
                state.captions[index] = action.payload;
            }
        },
    },
});

export const { setCaptions, addCaption, updateCaption } = captionsSlice.actions;
export default captionsSlice.reducer;
