import { createStore } from "redux";


const mainReducer = () => {};

const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(mainReducer, devtool);


export default store