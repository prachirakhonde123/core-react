import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact-Us.jsx'
import './index.css'
import { User } from './Components/index.js'
import Github, { githubLoaderData } from './Components/Github/Github.jsx'
// Method : 1--------------------------------------------
// const router = createBrowserRouter ([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About />
//       },
//       {
//         path : 'contact-us',
//         element : <Contact />
//       }
//     ]

//   }
// ])

// Method : 2---------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
         <Route path='blogs' element={<About/>}/>  
      </Route>  
      <Route path='contact-us' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
        loader = {githubLoaderData}  // for optimization
        path='github' 
        element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)

/*
Nested Routing : -
route will become : /about/blog
 <Route path='about' element={<About/>}>
    <Route path='blogs' element={<About/>}/>  
 </Route>  
*/
