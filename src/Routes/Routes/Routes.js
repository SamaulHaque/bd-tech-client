import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login/Login";
import Register from "../../pages/login/Register/Register";
import Blog from "../../pages/shared/Blog/Blog";
import FAQ from "../../pages/shared/FAQ/FAQ";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    },
    {
        path:'*',
        element: <div  className='text-center'>
          <h2>This Route Not Found.</h2>
          <h2>404</h2>
        </div>
      }
])