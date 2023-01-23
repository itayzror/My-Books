import React,{useState} from 'react';
import './App.css';
import Login from "./pages/Login/Login";
import BooksPage from "./pages/BooksPage/BooksPage";



function App() {
  const [isLogin, setIsLogin] = useState(false)


  return (
    <div className="App">
        {isLogin ? <BooksPage />: <Login handleLogin={()=>setIsLogin(true)}/>}
    </div>
  );
}

export default App;
