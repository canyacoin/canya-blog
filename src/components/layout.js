import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
// in angular, this is basically app.component
export default ({ children }) => (
  <main>
    <Header/> 
        <br></br>
        {children} 
    <Footer/>
  </main>
)