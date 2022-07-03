import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    showCompleted: true,
  },
  reducers: {
    showCompletedChanged(state, action) {
      state.showCompleted = action.payload;
    },
  },
});

const selectFilters = (state: RootState) => state.filters;
const { showCompletedChanged } = filtersSlice.actions;

export { selectFilters, showCompletedChanged };
export default filtersSlice.reducer;
