import axios from "axios"

const API_URL = 'https://restfullapinodejs1.onrender.com/api'

//get All user date
export const getAllStudent = async () => {
    try {
        return await axios.get(`${API_URL}/allstudent`)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)

    }
}

//Add User Data
export const addStudent = async (data) => {
    try {
        return await axios.post(`${API_URL}/student`, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

//get edit user data
export const getEditStudent = async (data) => {
    try {
        return await axios.get(`${API_URL}/edit/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}
//update user post data
export const UpdateStudentData = async (data, id) => {
    try {
        return await axios.post(`${API_URL}/update/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}

//delete user data
export const deleteUser = async id => {
    try {
        return await axios.delete(`${API_URL}/delete/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}