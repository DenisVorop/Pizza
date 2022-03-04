const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

//========================================================================================================================================================

const initialState = {
    sortBy: 'popular',
    categorie: 0
}

//=============REDUCER===========================================================================================================================================

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.payload,
            }
        }
        case SET_CATEGORY: {
            return {
                ...state,
                categorie: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const setSortBy = (name) => {
    return {
        type: SET_SORT_BY,
        payload: name,
    }
}

export const setCategory = (index) => {
    return {
        type: SET_CATEGORY,
        payload: index,
    }
}


//========================================================================================================================================================

export default filterReducer;
