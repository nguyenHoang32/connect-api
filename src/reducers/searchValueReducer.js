import * as Types from '../const/ActionTypes';
const initialState = '';
const searchValueReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.SEARCH_PRODUCT: {
            return action.searchValue
        }
        default: return state;
    }
}
export default searchValueReducer;