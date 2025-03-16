"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Navbar } from "react-bootstrap";
import NavBar from "./components/NavBar.js";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}>
      <NavBar />

      <section>
        <Carousel fade className="mb-4">
          {[
            { src: "/comph.webp", title: "Comprehensive Insurance Plans", desc: "Secure your future with our all-in-one insurance policies." },
            { src: "/insurance3.png", title: "Health & Well-being", desc: "Protect yourself and your family with the best health insurance." },
            { src: "/insurance4.jpg", title: "Vehicle Insurance", desc: "Drive worry-free with our top-rated motor insurance plans." }
          ].map((slide, idx) => (
            <Carousel.Item key={idx}>
              <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="d-block w-100"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", color: "black", padding: "10px", borderRadius: "5px" }}>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Insurance Categories Section */}
      <section className="container">
        <h2 className="text-center mb-4">Our Insurance Plans</h2>
        <div className="row">
          {[
            { title: "Health Insurance", desc: "Secure your medical expenses with ease.", img: "/health.jpg" },
            { title: "Car Insurance", desc: "Drive safely with complete vehicle protection.", img: "/car.jpg" },
            { title: "Travel Insurance", desc: "Explore the world without worries.", img: "/travel.webp" },
            { title: "Business Insurance", desc: "Protect your company from unforeseen risks.", img: "/business.jpg" }
          ].map((plan, idx) => (
            <div key={idx} className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                  <img
                    src={plan.img}
                    className="card-img-top"
                    alt={plan.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{plan.title}</h5>
                  <p className="card-text">{plan.desc}</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-5" style={{ backgroundColor: "#004080", color: "white" }}>
        <h2>Get the Best Insurance Plans Today!</h2>
        <p>Secure your future with our trusted policies.</p>
        <button className="btn btn-light btn-lg">Get a Quote</button>
      </section>
    </div>
  );
}
