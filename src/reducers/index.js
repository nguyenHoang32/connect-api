import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemEditingReducer from './itemEditingReducer';
import searchValueReducer from './searchValueReducer';
import toggleNavbarReducer from './toogleNavbarReducer';
import loadingReducer from './loadingReducer';
const appReducers = combineReducers({
    products: productsReducer,
    itemEditing: itemEditingReducer,
    searchValue: searchValueReducer,
    isToggleNavbar: toggleNavbarReducer,
    isLoading: loadingReducer
});
export default appReducers;