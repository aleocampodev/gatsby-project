import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const PrimaryLayout = ({ children, column }) => (
  <div>
    <Header />
    <div className="container">
      <div className={column}>
        <div className="col-xs-6">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
