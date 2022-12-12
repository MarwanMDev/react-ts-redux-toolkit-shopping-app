import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetProductsResponse, Product } from '../../types';
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products?limit=26';

const initialState = {
  products: [],
  status: 'idle',
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const { data, status } = await axios.get(
        'https://fakestoreapi.com/products?limit=26',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async () => {
    try {
      const { data, status } = await axios.get(
        'https://fakestoreapi.com/products/1',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      console.log('response status is: ', status);
      console.log(data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = state.products.concat(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message;
      });
    // .addCase(deletePost.fulfilled, (state, action) => {
    //   if (!action?.payload.id) {
    //     console.log('could not delete');
    //     console.log(action.payload);
    //     return;
    //   }

    //   const { id } = action.payload;
    //   const OldPosts = state.posts.filter((post) => post.id !== id);
    //   state.posts = OldPosts;
    // });
  },
});

export default productsSlice.reducer;

export const selectAllProducts = (state: any) =>
  state.products.products;
export const getProductsError = (state: any) => state.products.error;
export const getProductsStatus = (state: any) =>
  state.products.status;
