import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemEditingReducer from './itemEditingReducer';
import searchValueReducer from './searchValueReducer';
import toggleNavbarReducer from './toogleNavbarReducer';
const appReducers = combineReducers({
    products: productsReducer,
    itemEditing: itemEditingReducer,
    searchValue: searchValueReducer,
    isToggleNavbar: toggleNavbarReducer
});
export default appReducers;