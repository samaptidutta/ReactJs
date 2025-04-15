import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from '../features/tood/todoSlice';



export const store = configureStore({
    reducer:todoSlice.reducer
});