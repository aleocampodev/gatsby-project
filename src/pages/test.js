import { navigate } from "gatsby-link"
import React from "react"
import Header from "../components/Header/Header"

const Test = () => {
  return (
    <div>
      <Header title="Header  of our test page" />
      <h1>This is a test page!</h1>
      <button onClick={() => navigate("/")}>Navigate to Home</button>
    </div>
  )
}

export default Test
