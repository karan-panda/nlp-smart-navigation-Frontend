"use client";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { HeartPulse, Car, Bike, Plane, HomeIcon } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const blogs = [
    { id: 1, title: 'Motor News And Views', description: 'Stay up-to-date with latest motor news, car reviews.', category: 'Motor', readTime: '2min Read', image: '/motor.jfif', link: '/blogs/motor-news' },
    { id: 2, title: 'Ayurveda Hub', description: 'Everything about Ayurveda, from dadi ke nuskhe.', category: 'Ayurveda', readTime: '2min Read', image: '/ayurveda.jfif', link: '/blogs/ayurveda-hub' },
    { id: 3, title: 'Wellness Blogs', description: 'Read tips on improving lifestyle, diet and managing health.', category: 'Wellness', readTime: '2min Read', image: '/wellness.jfif', link: '/blogs/wellness-blogs' }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <header className="p-4 rounded-4 text-center position-relative overflow-hidden" 
        style={{ 
          background: "linear-gradient(135deg, #FF6600, #FF9A00)",
          boxShadow: "0 8px 20px rgba(255, 102, 0, 0.2)"
        }}>
        <div className="position-relative z-1">
          <h1 className="h2 fw-bold text-white mb-2">Hello, User!</h1>
          <p className="text-white mb-3 opacity-90">Complete your profile for easy claims</p>
          <button className="btn btn-sm btn-light px-3 py-2 rounded-pill fw-semibold shadow-sm"
            style={{ fontSize: "0.85rem" }}
            onClick={() => router.push('/profile')}>
            Complete Profile
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#FF6600" className="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
        <div className="position-absolute" style={{ 
          width: "120px", 
          height: "120px", 
          borderRadius: "50%", 
          background: "rgba(255, 255, 255, 0.1)", 
          top: "-20px", 
          right: "-20px" 
        }}></div>
        <div className="position-absolute" style={{ 
          width: "80px", 
          height: "80px", 
          borderRadius: "50%", 
          background: "rgba(255, 255, 255, 0.1)", 
          bottom: "-15px", 
          left: "10%" 
        }}></div>
      </header>

      <div className="bg-white p-4 my-4 rounded-4 shadow-sm d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF6600" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
          </div>
          <span className="fw-medium">Can't see your policy?</span>
        </div>
        <button 
          className="btn text-white fw-medium" 
          style={{ 
            backgroundColor: '#FF6600', 
            borderRadius: "8px",
            padding: "8px 16px",
            boxShadow: "0 2px 5px rgba(255, 102, 0, 0.3)"
          }} 
          onClick={() => router.push('/add-policy')}
        >
          Add now +
        </button>
      </div>

      <section className="my-4 d-flex justify-content-between align-items-center">
  <div>
    <h2 className="h4 fw-bold mb-1">Buy Insurance</h2>
    <p className="text-muted small mb-0">Secure your future today</p>
  </div>
  <Link href="/buy-policy" className="fw-semibold d-flex align-items-center" style={{color:"#FF6600"}}>
    View All 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-1" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </Link>
</section>

<div className="row mt-3 g-3">
  <div className="col-6 col-md-4">
    <Link href="/buy-policy/health" className="text-decoration-none">
      <div className="card h-100 border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center" 
             style={{ background: "linear-gradient(45deg, #ffe8e0, #fff5f2)" }}>
          <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: "rgba(255, 102, 0, 0.15)", width: "48px", height: "48px" }}>
            <HeartPulse size={24} color="#FF6600" />
          </div>
          <h5 className="card-title mb-0 text-center fs-6 fw-semibold">Health</h5>
        </div>
      </div>
    </Link>
  </div>
  
  <div className="col-6 col-md-4">
    <Link href="/buy-policy/car" className="text-decoration-none">
      <div className="card h-100 border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center" 
             style={{ background: "linear-gradient(45deg, #e0f0ff, #f2f9ff)" }}>
          <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: "rgba(0, 123, 255, 0.15)", width: "48px", height: "48px" }}>
            <Car size={24} color="#007bff" />
          </div>
          <h5 className="card-title mb-0 text-center fs-6 fw-semibold">Car</h5>
        </div>
      </div>
    </Link>
  </div>
  
  <div className="col-6 col-md-4">
    <Link href="/buy-policy/bike" className="text-decoration-none">
      <div className="card h-100 border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center" 
             style={{ background: "linear-gradient(45deg, #e0ffe0, #f2fff2)" }}>
          <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: "rgba(40, 167, 69, 0.15)", width: "48px", height: "48px" }}>
            <Bike size={24} color="#28a745" />
          </div>
          <h5 className="card-title mb-0 text-center fs-6 fw-semibold">Bike</h5>
        </div>
      </div>
    </Link>
  </div>
  
  <div className="col-6 col-md-4">
    <Link href="/buy-policy/travel" className="text-decoration-none">
      <div className="card h-100 border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center" 
             style={{ background: "linear-gradient(45deg, #e0e0ff, #f2f2ff)" }}>
          <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: "rgba(111, 66, 193, 0.15)", width: "48px", height: "48px" }}>
            <Plane size={24} color="#6f42c1" />
          </div>
          <h5 className="card-title mb-0 text-center fs-6 fw-semibold">Travel</h5>
        </div>
      </div>
    </Link>
  </div>
  
  <div className="col-6 col-md-4">
    <Link href="/buy-policy/home" className="text-decoration-none">
      <div className="card h-100 border-0 rounded-4 overflow-hidden">
        <div className="card-body p-3 d-flex flex-column align-items-center justify-content-center" 
             style={{ background: "linear-gradient(45deg, #ffe0e0, #fff2f2)" }}>
          <div className="rounded-circle mb-2 d-flex align-items-center justify-content-center" 
               style={{ backgroundColor: "rgba(220, 53, 69, 0.15)", width: "48px", height: "48px" }}>
            <HomeIcon size={24} color="#dc3545" />
          </div>
          <h5 className="card-title mb-0 text-center fs-6 fw-semibold">Home</h5>
        </div>
      </div>
    </Link>
  </div>
</div>



<section className="my-5 py-5 rounded-4" 
         style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef, #f8f9fa)" }}>
  <div className="container">
    <div className="text-center mb-4">
      <span className="badge bg-white text-dark px-3 py-2 rounded-pill shadow-sm mb-2" 
            style={{ fontSize: "0.75rem", fontWeight: "500" }}>
        REWARDS PROGRAM
      </span>
      <h2 className="h3 fw-bold">
        Live well and yield <span style={{ color: "#FF6600" }}>rewards</span>
      </h2>
      <p className="text-muted col-md-8 mx-auto">Track your health and driving habits to earn points and reduce your premium</p>
    </div>
    
    <div className="row g-4 justify-content-center">
      
      {/* Face Scan Card */}
      <div className="col-md-6 col-lg-5">
        <div className="card border-0 shadow h-100 rounded-4 hover-card" 
             style={{ 
               overflow: "hidden", 
               transition: "transform 0.3s ease, box-shadow 0.3s ease" 
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.boxShadow = '';
             }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ 
                     backgroundColor: "rgba(255, 102, 0, 0.15)", 
                     width: "48px", 
                     height: "48px",
                     marginRight: "16px" 
                   }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF6600" viewBox="0 0 16 16">
                  <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.708.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95Z"/>
                  <path d="M11.044 3.17a.75.75 0 0 1 .098 1.054A6.97 6.97 0 0 0 8.4 9.665a.75.75 0 0 1-1.5.063A8.47 8.47 0 0 1 9.9 3.225a.75.75 0 0 1 1.144-.054Z"/>
                  <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 8.5 8.5 0 0 0-1.58 1.99.75.75 0 0 0 1.298.752A7.002 7.002 0 0 1 5.85 3.5ZM2.5 7.775V7.5a.75.75 0 0 0-1.5 0v.275a.75.75 0 0 0 1.5 0Zm6.924-4.382a.75.75 0 1 0-1.242-.84A7.042 7.042 0 0 0 6.6 5.67a.75.75 0 0 0 1.5.032 5.542 5.542 0 0 1 1.324-2.31Z"/>
                </svg>
              </div>
              <div>
                <h3 className="h5 fw-bold mb-0">Face Scan Analysis</h3>
                <p className="text-muted small mb-0">Health vitals monitoring</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mt-4 mb-3">
              <img src="/facescan.jfif" alt="Face Scan" className="rounded-3 shadow-sm me-4" 
                style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              <div className="bg-light p-3 rounded-3 flex-grow-1">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Heart Rate</span>
                  <span className="fw-medium">-- bpm</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">SpO2</span>
                  <span className="fw-medium">-- %</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted small">Respiration</span>
                  <span className="fw-medium">-- /min</span>
                </div>
              </div>
            </div>
            
            <button className="btn w-100 text-white fw-medium mt-2 d-flex align-items-center justify-content-center" 
              style={{ 
                backgroundColor: "#FF6600", 
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 5px rgba(255, 102, 0, 0.3)"
              }}
              onClick={() => router.push('/face-scan')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-camera me-2" viewBox="0 0 16 16">
                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
              Scan now
            </button>
          </div>
        </div>
      </div>

      {/* Driving Score Card */}
      <div className="col-md-6 col-lg-5">
        <div className="card border-0 shadow h-100 rounded-4 hover-card" 
             style={{ 
               overflow: "hidden",
               transition: "transform 0.3s ease, box-shadow 0.3s ease" 
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.boxShadow = '';
             }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ 
                     backgroundColor: "rgba(25, 135, 84, 0.15)", 
                     width: "48px", 
                     height: "48px",
                     marginRight: "16px" 
                   }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 16 16">
                  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
                  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
                </svg>
              </div>
              <div>
                <h3 className="h5 fw-bold mb-0">Driving Score</h3>
                <p className="text-muted small mb-0">Safe driving rewards</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mt-4 mb-3">
              <div className="position-relative me-4">
                <img src="/car.jfif" alt="Car" className="rounded-3 shadow-sm" 
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 end-0 translate-middle bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                     style={{ width: '28px', height: '28px', fontSize: '12px', fontWeight: '600' }}>
                  A+
                </div>
              </div>
              <div className="bg-light p-3 rounded-3 flex-grow-1">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Overall Score</span>
                  <span className="fw-medium">-- pts</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Braking Score</span>
                  <span className="fw-medium">-- pts</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted small">Speed Control</span>
                  <span className="fw-medium">-- pts</span>
                </div>
              </div>
            </div>
            
            <button className="btn w-100 text-white fw-medium mt-2 d-flex align-items-center justify-content-center" 
              style={{ 
                backgroundColor: "#198754", 
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 5px rgba(25, 135, 84, 0.3)"
              }}
              onClick={() => router.push('/driving-score')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-speedometer2 me-2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
              </svg>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     

      <div className="bg-white rounded-4 shadow-sm my-5 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h4 fw-bold mb-1">Insightful Blogs</h2>
            <p className="text-muted small mb-0">Stay updated with latest insights</p>
          </div>
          <Link href="/blogs" className="fw-semibold d-flex align-items-center" style={{color:"#FF6600"}}>
            All Blogs
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right ms-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </Link>
        </div>
        
        <div className="row g-4">
          {blogs.map(blog => (
            <div key={blog.id} className="col-md-4">
              <div 
                className="card h-100 border-0 rounded-4 overflow-hidden" 
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
                onClick={() => router.push(blog.link)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="img-fluid w-100 h-100" 
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge" style={{ 
                      backgroundColor: blog.category === 'Motor' ? '#e6f7ff' : 
                                      blog.category === 'Ayurveda' ? '#f6ffed' : '#fff7e6',
                      color: blog.category === 'Motor' ? '#0070f3' : 
                             blog.category === 'Ayurveda' ? '#52c41a' : '#fa8c16',
                      fontWeight: '500',
                      padding: '4px 8px',
                      fontSize: '0.7rem',
                      borderRadius: '4px'
                    }}>
                      {blog.category}
                    </span>
                    <span className="ms-2 text-muted small">{blog.readTime}</span>
                  </div>
                  <h6 className="fw-bold mb-2">{blog.title}</h6>
                  <p className="text-muted small mb-0">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
