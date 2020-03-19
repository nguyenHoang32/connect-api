import * as Types from '../const/ActionTypes';
const initialState = {};
const itemEditingReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCT: {
            return {...action.product}
        }
        default: return {...state}
    }
}
export default itemEditingReducer;