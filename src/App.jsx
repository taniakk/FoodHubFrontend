import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './pages/userPannel/hero/hero'
import Nav from './components/nav'
import SignIn from './pages/userPannel/hero/signin'
import Footer from './components/footer'
import SignUp from './pages/userPannel/hero/signup'
import NavProducts from './pages/userPannel/hero/products'

function App() {

  return (
  <>
  <Nav/>
  <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/nproducts' element={<NavProducts/>} />

   
  </Routes>
    <Footer/>
  
  </>
  )
}

export default App
