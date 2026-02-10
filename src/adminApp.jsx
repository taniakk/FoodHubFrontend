import { Routes, Route } from 'react-router-dom'
import './App.css'

import Admin from './pages/adminPannel/admin'

import { AdminNav } from './components/adminNav'
import Category from './pages/adminPannel/category'
import UserTable from './pages/adminPannel/userTable'
import SubCategory from './pages/adminPannel/subcat'
import { CategoryTable } from './pages/adminPannel/categoryTable'
import SubCatTable from './pages/adminPannel/subcatTable'
import OrderTable from './pages/adminPannel/orderTable'
import CartTable from './pages/adminPannel/cartTable'
import { PaymentTable } from './pages/adminPannel/paymentTable'


function AdminApp() {

  return (
  <div >
  <AdminNav/>
  <div className='w-[80%] ml-[20%]'>

  <Routes>
    
    <Route path='/' element={<Admin/>}/>
    <Route path='/cat' element={<Category/>}/>
    <Route path='/subcat' element={<SubCategory/>}/>
    <Route path='/user' element={<UserTable/>}/>
    <Route path='/CatTable' element={<CategoryTable/>}/>
    <Route path='/subcatTable' element={<SubCatTable/>}/>
    <Route path='/order' element={<OrderTable/>}/>
    <Route path='/cart' element={<CartTable/>}/>
    <Route path='/payment' element={<PaymentTable/>}/>



   
  </Routes>
  </div>
 
    
  
  </div>
  )
}

export default AdminApp
