import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Item {
    title: any
    poster_path: string
    id: number,
    overview: string
    release_date: string
}

export interface FavoriteState {
    items: Item[]
}

const initialState: FavoriteState = {
    items: []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItemToFav(state, action: PayloadAction<Item>) {
            state.items.push(action.payload)
        },
        removeItemFromFav(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => {
                item.id !== action.payload
            })
        }
    }
})

export const { addItemToFav, removeItemFromFav } = favoriteSlice.actions