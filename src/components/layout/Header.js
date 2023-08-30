import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import Searchinput from '../form/Searchinput'
import useCategory from '../../hooks/useCategory'


function Header() {
  const [auth, setAuth] = useAuth()
  const categories = useCategory()

  const handleLogout = () =>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth')
    toast.success('Logout Successfully')
    alert('Logout Successfully')
  }
  console.log(categories);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to={"/"} class="navbar-brand" href="#">🛒 Ecommere App</Link>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <Searchinput/>
        <li class="nav-item">
          <Link to={"/"} class="nav-link ">Home</Link>
        </li>
        <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORIES
          </Link>
          <ul className="dropdown-menu"  >
          {categories?.map((c) => (

              <li ><Link className="dropdown-item" href="#">{c.name}</Link></li>
          ))}
        </ul>
        </li>
      
       {
        !auth.user ? (<>
         <li class="nav-item">
          <Link to={"/register"} class="nav-link" >Register</Link>
        </li>
        <li class="nav-item">
          <Link to={"/login"} class="nav-link" >Login</Link>
        </li></>
        ) : (
        <>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </Link>
          <ul class="dropdown-menu">
            <li><Link to={`/dashboard/${auth?.user?.role === 1 ?"admin" : "user"}`} class="dropdown-item" >Dashboard</Link></li>
            <li  >
          <Link onClick={handleLogout} to={"/login"} class="dropdown-item" >Logout</Link>
        </li>
          </ul>
        </li>

          
        </>)
       }
        <li class="nav-item">
          <Link to={"/cart"} class="nav-link" >Cart(0)</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</>
  )
}

export default Header
