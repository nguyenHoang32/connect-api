import * as Types from '../const/ActionTypes';
import callApi from '../uliti/callApi';
// ----------------------------------------------------
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
            dispatch(fetchProductStart());
            callApi('products').then(res => {
                dispatch(actFetchProducts(res.data));
            }).catch(err => {dispatch(fetchProductFail())})
    }
}
// ------------------------------------------------------
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'DELETE').then(res => {
            if (res.status === 200) {
                dispatch(actDeleteProduct(id))
            }
        })
    }
}
// --------------------------------------------------------------
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        callApi('products', 'POST', product).then(res => {       
                dispatch(actAddProduct(res.data)) //khi dùng product thì thi thoảng lại bị lỗi
        })
    }
}
// ---------------------------------------------------------------
export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(product))
        }
        )
    }
}
// -------------------------------------------------
export const actSearchProduct = (searchValue) => {
    return {
        type: Types.SEARCH_PRODUCT,
        searchValue
    }
}
// ----------------------------------------------------
export const actToggleNavbar = () => {
    return {type: Types.TOGGLE_NAVBAR}
}
// -------------------------------------------------------
export const fetchProductStart = () => {
    return {
        type: Types.FETCH_PRODUCT_START
    }
}
// export const fetchProductSucess = (products) => {
//     return {
//         type: Types.FETCH_PRODUCT_SUCESS,
//         products: products
//     }
// }
export const fetchProductFail = () => {
    return{
        type: Types.FETCH_PRODUCT_FAIL
    }
}