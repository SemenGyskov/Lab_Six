import Catalog from './components/Catalog';
import './App.css';
import React from 'react';
import Registration from './components/Registration'
import Login from './components/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyButton from './components/UI/button/MyButton';
import Orders from './components/Orders'
import Basket from './components/Cart'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  function handleLogin(data){
    if(data.username ==='admin' && data.password ==='12345'){
      setUser({ username: data.username})
    }
  }
  function handleRegistration(data){
    setUser({username: data.username})
  }
  return (

    <div className='App'>
      {user ? (
        <div className="App">
          <h1>Добро пожаловать, {user.username}</h1>
        </div>
       ) : (<div>
        {isLogin ? (
          <Login onSubmit={handleLogin}/>
        ):(<Registration onSubmit={handleRegistration}/>)}
        <MyButton className='MyButton' onClick={()=> setIsLogin(!isLogin)}>{isLogin ? 'Зарегистрироваться':'Войти'}</MyButton><br/>login: admin<br/> password: 12345
      </div>)}
      <BrowserRouter>
            <Link className="Links" to={'/'}>Домой</Link><br/><hr/>
            
            <Link className="Links" to={'/catalog/'}>Каталог</Link> | <Link className="Links" to={'/basket/'}>Корзина</Link> | <Link className="Links" to={'/orders/'}>Заказы</Link>  
            
            
            <Routes>
                <Route path={'/catalog/'} element={ <Catalog/> }></Route>
                <Route path={'/basket/'} element={ <Basket/> }></Route>
                <Route path={'/orders/'} element={ <Orders/> }></Route>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
