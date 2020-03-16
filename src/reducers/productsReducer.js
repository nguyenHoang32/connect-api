const initialState = [
    {
        id: 1,
        name: 'Hello',
        price: 40000,
        status: true,
    },
    {
        id: 1,
        name: 'Hello',
        price: 40000,
        status: true,
    },
    {
        id: 1,
        name: 'Hello',
        price: 40000,
        status: true,
    },
    {
        id: 1,
        name: 'Hello',
        price: 40000,
        status: true,
    },
    {
        id: 1,
        name: 'Hello',
        price: 40000,
        status: true,
    },
];
const productsReducers = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default productsReducers;