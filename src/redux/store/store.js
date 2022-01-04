import { createStore } from "redux";
import cartReducers from "../reducers/cartReduces";

export const store = createStore(cartReducers);