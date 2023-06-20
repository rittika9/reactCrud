import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../Contex/Auth'

const Header = () => {
  const[auth,setAuth]=useAuth()
  //console.log(auth.user);

  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
      toast.success(' logout successfully')
  }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft: "800px"}}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/blog">Blog </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/student">Student </Link>
      </li>
      {
          !auth.user ?(
          <>
             <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
          </>):(
            <>
            <li className="nav-item">
           <NavLink className="nav-link" ><h6> {auth.user.name}</h6></NavLink> 
            </li>
             <li className="nav-item"><NavLink onClick={handleLogout}  className="nav-link" to="/login">logout</NavLink>
            </li>
            </>
          )
        }
      
    </ul>
  </div>
</nav>

    </>
  )
}

export default Header
