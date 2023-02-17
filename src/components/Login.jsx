import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';

export default function Login({onSubmit}){
  const[username,setUserName]=useState('')
  const[password,setPassword]=useState('')
  const[error, setError]=useState(null)
  const handleSubmit = event =>{
      event.preventDefault()
      if(!username || !password){
          setError('Введите пароль и имя')
          return
      }
      setError(null)
      onSubmit({username,password})
    }//Проверка логина и пароля
  return(
      <form onSubmit={handleSubmit}>
          <h1>Вход</h1>
          {error && <p>{error}</p>}
          <MyInput placeholder='Ваше имя' value={username} onChange={event=>setUserName(event.target.value)}/>
          <MyInput type='password' placeholder="Ваш пароль" value={password} onChange={event=>setPassword(event.target.value)}/>
          <br/><MyButton className='MyButton' type="submit">Войти</MyButton>
      </form>
  )}//форма входа