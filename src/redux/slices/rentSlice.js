import { createSlice } from "@reduxjs/toolkit";
import { getListCar, addFavoriteCar } from "../operations/rentOperation";

const rentSlice = createSlice({
  name: "rent",
  initialState: {
    listCar: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCar.fulfilled, (state, { payload }) => {
        state.listCar = payload;
      })
      .addCase(addFavoriteCar.fulfilled, (state, { payload }) => {
        return {
          listCar: state.listCar.map(item => {
            return item.id !== payload.id ? item : payload;
          }),
        };
      })
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});
export default rentSlice.reducer;
