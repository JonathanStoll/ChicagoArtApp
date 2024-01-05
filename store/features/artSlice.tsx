import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface favArtWorks {
  [key: string]: any;
}

interface favArtWorksState {
  favArts: favArtWorks[];
}
const initialState: favArtWorksState = {
  favArts: [],
};
export const ArtSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<favArtWorks>) => {
      state.favArts.push(action.payload);
    },
  },
});
export default ArtSlice.reducer;
export const {addFav} = ArtSlice.actions;
