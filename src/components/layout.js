import React from "react"
import Header from "../components/header"
// in angular, this is basically app.component
export default ({ children }) => (
  <main>
    <Header/>
    <div className="container-fluid">
        {children}
    </div>
  </main>
)