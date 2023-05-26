import React from 'react';
    import {
        createBrowserRouter,
      } from "react-router-dom";
import Home from '../component/Home/Home';
import Main from '../Layout/Main';
import AllToys from '../component/AllToys/AllToys';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import PrivateRouter from './PrivateRouter';
import MyToy from '../component/MyToy/MyToy';
import AddAToy2 from '../component/AddaToy/AddAToy2';
import ToyDetails from '../component/ToyDetails/ToyDetails';
import Blog from '../component/Blog/Blog';
import Update from '../component/Update/Update';
import Error404 from '../component/Error/Error404';



      const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          errorElement:<Error404></Error404>,
          children:[{
            path: "/",
            element:<Home></Home>,
            title: 'Animal Fun Land | Home',
          },
          {
          path:'alltoy',
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://toys-animal-assignment11-server.vercel.app/alltoys')
          },
          {
            path:'addatoy',
            element:<PrivateRouter><AddAToy2></AddAToy2></PrivateRouter>
          },
          {
            path:'login',
            element:<Login></Login>
          },
          {
            path:'register',
            element:<Register></Register>
          },
          {
            path:'mytoy',
            element:<MyToy></MyToy>
          },
          {
            path:'toydetails/:id',
            element:<PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
            loader:({params})=>fetch(`https://toys-animal-assignment11-server.vercel.app/singleToys/${params.id}`)
          },
          {
            path:'blog',
            element:<Blog></Blog>
          },
          {
            path:'update/:id',
            element:<Update></Update>,
            loader:({params})=>fetch(`https://toys-animal-assignment11-server.vercel.app/singleToys/${params.id}`)
          }
        ]
        },
      ]);


export default router;