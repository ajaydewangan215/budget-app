export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => {
                    return item.id !== action.payload
                }),
            }
        case 'DELETE_ALL':
            return {
                ...state,
                items: [],
            }
        default:
            return state
    }
}