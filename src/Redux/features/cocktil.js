import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
      return fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      ).then((res) => res.json());
    }
  );
  // export const fetchSingleCocktails = createAsyncThunk(
  //   "cocktails/fetchSignleCocktails",
  //   async ({ id }) => {
  //     return fetch(
  //       `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  //     ).then((res) => res.json());
  //   }
  // );

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
    categorys:[],
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
      const arr = [];
      state.cocktails.forEach(ele => arr.push(ele.strCategory))
      state.categorys = arr;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // [fetchSingleCocktails.pending]: (state, action) => {
    //     state.loading = true;
    //   },
    //   [fetchSingleCocktails.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.cocktail = action.payload.drinks;
    //   },
    //   [fetchSingleCocktails.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
      
  },
  reducers:{
    getCocktailById:(state,action)=>{
      state.cocktail = state.cocktails.find((ele => ele.idDrink === action.payload))
     },
    getCocktailByCategory:(state,action)=>{
      state.cocktails = state.cocktails.filter((ele => ele.strCategory === action.payload))
     },
  }
});
export const {getCocktailById,getCocktailByCategory} = cocktailSlice.actions
export default cocktailSlice.reducer;