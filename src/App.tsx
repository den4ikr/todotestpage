import './App.css';
import { Header } from "./components/Header/Header"
import TodoListContainer from "./components/Main/TodoList/TodoListContainer"

function App() {
  
  return (
    <div>
      <Header />
      <div className = "container" >
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
