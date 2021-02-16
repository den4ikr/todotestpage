import { MainReducer } from './main-reducer';
import { combineReducers, createStore } from "redux";

const saveToLocalStorage = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify (state)
        localStorage.setItem ("state", serializedState)
    } catch (err) {
        console.log(err);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem ("state")
        if (serializedState === null) return undefined
        return JSON.parse (serializedState)
    } catch (err) {
        console.log(err);
        return undefined
    }
}

const rootReducer = combineReducers ({
    main: MainReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType <RootReducerType>

const persistedState = loadFromLocalStorage ()
export const store = createStore (rootReducer, persistedState)

store.subscribe ( () => saveToLocalStorage (store.getState ()) )