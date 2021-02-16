const SET_FILTER = "SET_FILTER"

let initialState = {
    filter: "All"
}

export const FilterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export const setFilter = (filter: string) => ( { type: SET_FILTER, filter } )