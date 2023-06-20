import React, { useEffect, useState } from 'react'
import { deleteUser, getAllStudent } from './API'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layouts/Layout'
import { toast } from 'react-toastify'

const StudentHome = () => {
    const[student,setStudent]=useState([])
    const getStudent=async()=>{
        const response=await getAllStudent()
        setStudent(response?.data)
    }


    // /for delete user
    const deleteUserData=async(id)=>{
      await deleteUser(id)
      getStudent()
      // 
      toast.error('delete successfully')
      }

    useEffect(()=>{
        getStudent()
        },[])

  return (
    <>
    <Layout title={'ecom 23 register page'}>
    <div className="container">
    <h2>Add Student informatiom :</h2>
    <Link to="/addstudent" className='btn btn-info'>Add +</Link>

        <h2 style={{textAlign:"center",color:"blue"}}>: Student List :</h2>
    <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">City</th>
      <th scope="col">Class</th>
      <th colSpan={2}>Action</th>

    </tr>
  </thead>
  <tbody>
    {student?.data?.map((item,index)=>{
        return(
            <>
             <tr>
      <th scope="row">{item.name}</th>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.city}</td>
      <td>{item.class}</td>

      <td><Link to={`/update/${item._id}`} className='btn btn-success'>Update</Link> </td>
      <td><Link onClick={() => deleteUserData(item._id)} className='btn btn-danger'>Delete</Link></td>



    </tr>
            </>
        )
    })}
   
   
  </tbody>
</table>
{/* {list} */}
</div>
</Layout>
    
    
    
    
    
    </>
  )
}

export default StudentHome