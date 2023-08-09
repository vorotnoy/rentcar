import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRentCarApi, addFavoriteApi } from '../../services';

export const getListCar = createAsyncThunk(
    'rent/getListCar',
    async (_, { getState, rejectWithValue }) => {
      try {
        const getListOfCar = await getRentCarApi();
        return getListOfCar;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );

  export const addFavoriteCar = createAsyncThunk(
    'rent/addfavorite',
    async (data, { getState, rejectWithValue }) => {
      try {
        const addFavorite = await addFavoriteApi(data);
        return addFavorite;
      } catch (error) {
        rejectWithValue(error.message);
      }
    }
  );