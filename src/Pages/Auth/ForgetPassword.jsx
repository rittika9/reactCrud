
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    const [answer,setAnswer]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/forgot-password`, {
            email,
            newPassword,
            answer,
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
    
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      };


  return (
    <>
      <div className='resigter'>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="title">Forget Password</div>
            

            <div className="input-container ic2">
              <input className="input" type="email" placeholder="Enter Your Email"
                name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className="placeholder"></label>
            </div>

            <div className="input-container ic2">
              <input className="input" type="password" placeholder="Enter New Password"
                name="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <label className="placeholder"></label>
            </div>
            <div className="input-container ic2">
              <input className="input" type="text" placeholder="Enter Your Answer"
                name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              <label className="placeholder"></label>
            </div>
            <button type="submit" className="submit">Submit</button>
            
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgetPassword