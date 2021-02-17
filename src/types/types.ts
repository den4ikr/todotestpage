export type TodoListItemType = {
    title: string,
    id: number,
    completed: boolean,
}

// Add Todo Function 
export interface AddTodoType {
    (id: number, completed: false, title: any): void
}
//Delet Todo Function
export interface RemoveTodoType {
    (id: number): void
}