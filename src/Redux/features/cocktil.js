import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
      return fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      ).then((res) => res.json());
    }
  );

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
    categorys:[],
    categorysFilterData:[],
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
  },
  reducers:{
    getCocktailById:(state,action)=>{
      state.cocktail = state.cocktails.find((ele => ele.idDrink === action.payload))
     },
    getCocktailByCategory:(state,action)=>{
      state.categorysFilterData = state.cocktails.filter((ele => ele.strCategory === action.payload))
     },
  }
});
export const {getCocktailById,getCocktailByCategory} = cocktailSlice.actions
export default cocktailSlice.reducer;