import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import NavBar from "../../components/NavBar";

const Car = () => {
  return (
    <>
        <NavBar/>
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
          <h2 className="text-center mb-4"> CAR Policies</h2>
        </div>
        </>
  );
}

export default Car