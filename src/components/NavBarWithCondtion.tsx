import React from 'react'
import { Navbar } from '.'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'



const LOCATION_NO_NAVBAR = ["signup","login"]

const NavBarWithCondtion = () => {

    const [showNavbar, setShowNavbar] =  useState(false)
    const [cpath, setCpath] =  useState("")
    const location = useLocation()
    const current_path = location.pathname.toString().split("/")
    const current_path_string = current_path[current_path.length - 1]

    
    useEffect(()=>{

        console.log('navbar')
     

    },[])



  return (
    showNavbar ? (<Navbar/>) : (<></>)
  )
}

export default NavBarWithCondtion