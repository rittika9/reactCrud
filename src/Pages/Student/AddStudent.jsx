import React, { useState } from 'react'
import { addStudent } from './API'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../../Components/Layouts/Layout';



const initialValue={
    name: '',
        email: '',
        phone: '',
        city: "",
        class:"",
}



const AddStudent = () => {
    const[user,setUser]=useState(initialValue)
    const[error,setError]=useState([])
    const navigate=useNavigate()



      // for validate Form

const validation=()=>{

    let error={}
    if (!user.name){
        error.name="Name is requerd"
    }
     if(!user.email){
        error.email="Email is requerd"
    }
    else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email))
    {
        error.email="Enter a valid email"
    }
    
    if(!user.phone){
        error.phone="phone_no is requerd"
    }
     
    if(!user.city){
        error.city="city is requerd"
    }
    if(!user.class){
        error.class="class is requerd"
    }

    return error
    }


let name,value
const postUserData=(e)=>{
    name=e.target.name
    value=e.target.value
    setUser({ ...user,[name]:value})
    if (name === "name") {
        if (value.length === 0) {
            setError({ ...error, name: "@Name is Required" })
            setUser({ ...user, name: "" })
        } else {
            setError({ ...error, name: "" })
            setUser({ ...user, name: value })
        }
    }
    
    if (name === "email") {
        if (value.length === 0) {
            setError({ ...error, email: "@Email is Required" })
            setUser({ ...user, email: "" })
        } else {
            setError({ ...error, email: "" })
            setUser({ ...user, email: value })
        }
    }
    
    if (name === "phone") {
        if (value.length === 0) {
            setError({ ...error, phone: "@Phone is Required" })
            setUser({ ...user, phone: "" })
        } else {
            setError({ ...error, phone: "" })
            setUser({ ...user, phone: value })
        }
    }
    
    if (name === "city") {
        if (value.length === 0) {
            setError({ ...error, city: "@City is Required" })
            setUser({ ...user, city: "" })
        } else {
            setError({ ...error, city: "" })
            setUser({ ...user, city: value })
        }
    }
    
    if (name === "class") {
        if (value.length === 0) {
            setError({ ...error, class: "@Class is Required" })
            setUser({ ...user, class: "" })
        } else {
            setError({ ...error, class: "" })
            setUser({ ...user, class: value })
        }
    }
}


const SubmitInfo=async(e)=>{
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    if (Object.keys(ErrorList).length === 0) {
     const res= await addStudent(user)
     navigate('/student')
      toast(res.data.msg)
}

}



  return (
    <>
        <Layout title={'ecom 23 register page'}>

    <div className='resigter'>
    <form onSubmit={SubmitInfo} className="form">
    <div className="title">Add Student</div>
                <div>
                    <label> Name </label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                </div>
                <div>
                    <label> Email </label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                </div>
                <div>
                    <label> Phone </label>
                    <input type="number" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                </div>

                <div>
                    <label> City </label>
                    <input type="text" className="form-control" name="city" value={user.city} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
                </div>


                <div>
                    <label> Class </label>
                    <input type="text" className="form-control" name="class" value={user.class} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.class} </span>
                </div>

                <div>
                    <button type="submit" className="submit"> Add User </button>
                    <br />
                     <Link to="/student" className='btn submit'>Cancle</Link> 

                </div>
            </form>
            </div>
    
    </Layout>
    
    
    
    </>
  )
}

export default AddStudent