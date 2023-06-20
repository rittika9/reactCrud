import logo from './logo.svg';
import './App.css';
import ClintCrudRouting from './ClintCrudRouting';
import Login from './Pages/Auth/Login';
import Registration from './Pages/Auth/Registration';
import ForgetPassword from './Pages/Auth/ForgetPassword';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import {  Routes,Route, Navigate } from 'react-router-dom';
import StudentHome from './Pages/Student/StudentHome';
import AddStudent from './Pages/Student/AddStudent';
import UpdateStudent from './Pages/Student/UpdateStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  function PrivateRoute({children}){
    const token=localStorage.getItem('auth') || sessionStorage.getItem('auth')
    return token !==null && token !== undefined ? (
      children
    ):(
      <Navigate to="/login"/>
    )
  }
  const publicRouter=[
    {
      path:"/login",
      component:<Login/>
    },
    {
      path:"/register",
      component:<Registration/>
    },
    {
      path:"/forgetpassword",
      component:<ForgetPassword/>
    },
  ]

  const privateRouter=[{
    path:'/',
    component:<Home/>
  },
  {
  path:"/blog",
  component:<Blog/>
},
{
  path:"/student",
  component:<StudentHome/>
},
{
  path:"/addstudent",
  component:<AddStudent/>
},
{
  path:"/update/:id",
  component:<UpdateStudent/>
},
]
  return (
    <>
<ToastContainer/>


    <Routes>
      {
    publicRouter?.map((route,index)=>{
return(
  <>
  <Route 
  key={index+1}
  exact
  path={route?.path}
   element={route?.component}/>
  </>
)
    })
  }

{
    privateRouter?.map((proute,index)=>{
return(
  <>
  <Route 
  key={index+1}
  exact
  path={proute?.path}
   element={<PrivateRoute>{proute?.component}</PrivateRoute> }/>
  </>
)
    })
  }
    </Routes>


    </>
  );
}

export default App;
