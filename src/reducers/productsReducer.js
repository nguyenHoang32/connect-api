import * as Types from '../const/ActionTypes';
const initialState = [];
const productsReducers = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCT:{
            return [...action.products];
        }
        case Types.DELETE_PRODUCT: {
            const products = state;
            const id = action.id;
            const index = products.findIndex((product) => product.id === id);
            products.splice(index, 1);
            return [...products]
        }
        case Types.ADD_PRODUCT: {
            const products = state;
            const newProduct = action.product;
            products.push(newProduct);
            return [...products]
        }
        case Types.UPDATE_PRODUCT: {
            const products = state;
            const index = products.findIndex(product => product.id === action.product.id);
            products.splice(index, 1, action.product);
            return [...products];
        }
        default: return [...state];
    }
}
export default productsReducers;