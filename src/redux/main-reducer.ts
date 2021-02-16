import { TodoListItemType } from './../types/types';

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const REMOVE_TASK = "REMOVE_TASK"
const SET_COMPLETED = "SET_COMPLETED"

const initialState = {
    todos: [
        
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
        case REMOVE_TASK:
            return{ 
                ...state,
                todos: [ ...state.todos.filter (task => task.id !== action.id) ]
            }
        case SET_COMPLETED:
            return { 
                ...state,
                todos: [ ...state.todos.map (task => {
                    if (task.id === action.id) {
                        task.completed = !task.completed
                    }
                    return task
                }) ]
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
    removeTask: (id: number ) => ( { type: REMOVE_TASK, id } as const ),
    setCompleted: (id: number) => ( { type: SET_COMPLETED, id } as const ),
}
