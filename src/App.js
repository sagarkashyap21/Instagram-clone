import React from 'react'
import Navbar from './Component/Navbar'
import Post from './Component/Post'
import Status from './Component/Status'
import "./index.scss"
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
export default function App() {
  return (
   <> 
   
<div className="container">
<Navbar />
<Status />
<hr />
{/* <div style={{border:"1px solid lightgray"}}></div> */}
<Post />


  </div>   
   
   </>
  )
}
