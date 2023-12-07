

import './App.css'
import {Routes,Route, useLocation} from "react-router-dom"
import { Navbar ,Footer} from './components';
import { LandingPage,Products,Login,SignUp } from './pages';
import { useEffect,useState } from 'react';


const LOCATION_NO_NAVBAR = ["signup","login"]

function App() {
  const location = useLocation()
  const current_path = location.pathname.toString().split("/")
  const current_path_string = current_path[current_path.length - 1]

  const [showNavbar, setShowNavbar] =  useState(false)

  
  useEffect(()=>{
    LOCATION_NO_NAVBAR.includes(current_path_string) ? setShowNavbar(false) : setShowNavbar(true)
  })



  return (
    <>

 


        {showNavbar && <Navbar/>}
        

        <div className='pt-[150px] lg:pt-[90px]'>


        

        <Routes>
           <Route path='/' element={<LandingPage/>}/>  
           <Route path='/products' element={<Products/>}/>  
           <Route path='/login' element={<Login/>}/>  
           <Route path='/signup' element={<SignUp/>}/>  
          
        </Routes> 

        </div>


        <div className='flex items-end h-screen  '>

        {showNavbar && <Footer/>}

            {/* <Footer/> */}
        </div>



   
  
    </>
  )
}

export default App
