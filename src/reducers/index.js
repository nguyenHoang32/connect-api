import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemEditingReducer from './itemEditingReducer';
import searchValueReducer from './searchValueReducer';
const appReducers = combineReducers({
    products: productsReducer,
    itemEditing: itemEditingReducer,
    searchValue: searchValueReducer
});
export default appReducers;