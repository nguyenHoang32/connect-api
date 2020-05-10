import * as Types from '../const/ActionTypes';
const initialState = false;
const loadingReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCT_START: 
        { 
            return true;
        };
        case Types.FETCH_PRODUCT_FAIL: 
        {
            return false;
        }
        case Types.FETCH_PRODUCT: 
        {
            return false;
        }
        default: return state;
    }
}
export default loadingReducer;