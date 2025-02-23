import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Bnavbar from './components/navbar/Bnavbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Bnavbar />,
      children: [ 
        {
          path: "/",
          element:<Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }
      ]
    }
  ])

  return (
    <>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
