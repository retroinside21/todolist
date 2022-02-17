import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/Navbar/NavBar';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <NavBar />
      <div className="app-wrapper">
        <Routes>
          <Route exact path="/"  element={<MainPage />} />
          <Route exact path="/todolist"  element={<TodoList />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
