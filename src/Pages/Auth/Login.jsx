import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../Contex/Auth';
import Layout from '../../Components/Layouts/Layout';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] =useAuth()
 
  const navigate = useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {
                email,
                password,
              });
              if (res && res.data.success) {
                toast(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token,
                });
                console.log(res);
                navigate('/')
                 localStorage.setItem("auth", JSON.stringify(res.data));
                // navigate(location.state || "/");
              } else {
                toast.error(res.data.message);
              }

        }catch(error){
            console.log(error);
          toast.error(error.response.data.message);
        }
}

  return (
    <>
    <Layout title={'ecom 23 register page'}>
      <div className='resigter'>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="title">User Login</div>
            

            <div className="input-container ic2">
              <input className="input" type="email" placeholder="Enter Your Email"
                name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className="placeholder"></label>
            </div>

            <div className="input-container ic2">
              <input className="input" type="password" placeholder="Enter Your Password"
                name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="placeholder"></label>
            </div>
            <button type="submit" className="submit">Login</button>
          <h6>Do't have an account?<Link to='/register'> Create Account </Link></h6>  
            <Link to='/forgetpassword'> Forgot Password</Link>
          </div>
        </form>
      </div>
      </Layout>
    </>
  )
}

export default Login
