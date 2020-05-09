import * as Types from '../const/ActionTypes';
const initialState = false;
const toogleNavbarReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.TOGGLE_NAVBAR: {
            return !state;
        }
        default: return state;
    }
}
export default toogleNavbarReducer;