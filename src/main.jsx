import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root.jsx";
import Index from "./components/Index.jsx";
import Experience from "./components/Experience.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Index />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
