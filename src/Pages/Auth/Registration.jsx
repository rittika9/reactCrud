import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../Components/Layouts/Layout';

const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
            try{
                const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, {
                    name,
                    email,
                    password,
                    phone,
                    address,
                    answer,
                  });
                  console.log(res);
                  if (res && res.data.success) {
                   
                    toast(res.data && res.data.message);
                    navigate("/login");
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
            <div className="title">Registration</div>
            <div className="input-container ic1">
              <input className="input" type="text" placeholder=" Enter Your Name"
                name="name" value={name} onChange={(e) => setName(e.target.value)} />
              <label className="placeholder"></label>
            </div>

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

            <div className="input-container ic2">
              <input className="input" type="text" placeholder="Enter Your Phone"
                name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <label className="placeholder"></label>
            </div>

            <div className="input-container ic2">
              <input className="input" type="text" placeholder="Enter Your Address"
                name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <label className="placeholder"></label>
            </div>

            <div className="input-container ic2">
              <input className="input" type="text" placeholder="What is Your Favorite sports"
                name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              <label className="placeholder"></label>
            </div>

            <button type="submit" className="submit">Register</button>
           <h6>Already have an account? <Link to='/login'>login now </Link></h6>
          </div>
        </form>
      </div>
      </Layout>
    
    
    
    </>
  )
}

export default Registration