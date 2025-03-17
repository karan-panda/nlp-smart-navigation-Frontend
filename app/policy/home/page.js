import React from 'react'
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
        <NavBar/>
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
          <h2 className="text-center mb-4"> HOME Policies</h2>
        </div>
        </>
  )
}

export default Home