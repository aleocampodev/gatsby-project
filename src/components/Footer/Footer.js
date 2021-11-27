import React from "react"
import * as footerStyle from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className="container">
        <span className="text-muted">This is our footer container</span>
      </div>
    </footer>
  )
}

export default Footer
