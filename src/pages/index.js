import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title="Header of index page" />
      <h1>Hello world!</h1>
      <Link to="/test/">Navigate To Test</Link>
      <a href="https://google.com">go to Google</a>
      <div>
        <img
          src="https://cdn.forbes.com.mx/2020/09/Wonder-Woman-1984.jpg"
          width="780"
          alt="Mujer maravilla"
        />
      </div>
    </div>
  )
}
