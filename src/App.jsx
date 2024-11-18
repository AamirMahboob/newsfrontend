import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Client from './client/Client'
import AdminLayout from './layouts/AdminLayout';
import AdminTestemoinal from './admin/AdminTestimonial';
import Signin from './admin/Signin';
import AdminHero from './admin/AdminHero';
import Skills from './admin/Skills';
import Aboutme from './admin/Aboutme';
import AdminDashboard from './admin/AdminDashboard';
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Client />,  // Main website page
  },
  {
    path: '/admin/signin',  // `/admin/signin`
    element: <Signin />,  // Admin sign-in page
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',    
        element: <AdminDashboard />,
      },
      {
        path: 'hero',  
        element: <AdminHero />,
      },
      {
        path: 'admintestimonial',   
        element: <AdminTestemoinal />,
      },
      {
        path: 'skills',  // `/admin/settings`
        element: <Skills />,
      },
      {
        path: 'aboutme',  // `/admin/settings`
        element: <Aboutme />,
      },
    ],
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
