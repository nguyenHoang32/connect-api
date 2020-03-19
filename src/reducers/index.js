import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemEditingReducer from './itemEditingReducer';
const appReducers = combineReducers({
    products: productsReducer,
    itemEditing: itemEditingReducer
});
export default appReducers;