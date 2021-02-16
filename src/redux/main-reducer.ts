import { TodoListItemType } from './../types/types';

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const REMOVE_TASK = "REMOVE_TASK"

const initialState = {
    todos: [
        {id: 1, title: "Todo 1"},
        {id: 2, title: "Todo 2"},
    ] as Array <TodoListItemType>
}
type InitialStateType = typeof initialState

export const MainReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_TODOS:
            return { ...state, todos: action.todos }
        case ADD_TODO:
            return {
                 ...state,
                todos: [ ...state.todos, action.payload ]
            }
        default: 
            return state
    }
}

type PropertiesType <T> = T extends { [ket: string]: infer U } ? U : never
type ActionsTypes = ReturnType <PropertiesType <typeof actions>>

export const actions = {
    setTodos: (todos: Array <TodoListItemType>) => ( { type: SET_TODOS, todos } as const ),
    addTodo: (id: number, completed: boolean, title: string) => ( { type: ADD_TODO, payload: { id, completed, title } } as const ),
    removeTask: (id: number ) => ( { type: REMOVE_TASK, id } as const )
}
