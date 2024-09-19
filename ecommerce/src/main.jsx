import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {RouterProvider,Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import {Provider} from 'react-redux'
import Store from './store/Store.js'
import SinglePage from './components/SinglePage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='single/:id' element={<SinglePage/>}/>
  </Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {Store}>
    <RouterProvider router={router}/>

    </Provider>
   
  </StrictMode>,
)
