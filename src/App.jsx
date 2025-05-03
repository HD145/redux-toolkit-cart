import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Provider } from 'react-redux'
import store from './app/store'
// import './App.css'

function App() {

  return (
    <div>
      <Provider store = {store}>
      <Navbar/>
      <Products/>
      </Provider>
    </div>
  )
}

export default App
