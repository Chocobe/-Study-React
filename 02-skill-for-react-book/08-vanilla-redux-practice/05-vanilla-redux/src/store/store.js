import { createStore } from "redux";
import { reducer } from "./reducer";

/**
 * @type { import("redux").Store<{
 *  toggle: boolean;
 *  counter: number;
 * }> }
 */
const store = createStore(reducer);

export default store;