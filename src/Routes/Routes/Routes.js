import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login/Login";
import Register from "../../pages/login/Register/Register";

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
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
])