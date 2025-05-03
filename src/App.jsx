import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { Provider } from 'react-redux'
import {store, persistor } from './app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import { PersistGate } from 'redux-persist/integration/react'
// import './App.css'

function App() {

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
