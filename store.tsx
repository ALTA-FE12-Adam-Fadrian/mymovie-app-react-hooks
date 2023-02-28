import { configureStore } from "@reduxjs/toolkit"
import { favoriteSlice } from "./src/features/favoriteSlice"

export default configureStore({ 
reducer: {
    favorite: favoriteSlice.reducer
}
})
