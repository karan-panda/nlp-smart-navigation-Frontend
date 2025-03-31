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
    <div className="container-fluid bg-light min-vh-100 p-4 backgroundColor: '#FF6600">
      <header className=" p-4 rounded text-center bg-'#FF6600" style={{ backgroundColor: '#ff9a00' }}>
        <h1 className="h2 fw-bold">Hello, User!</h1>
        <p>Complete your profile for easy claims</p>
      </header>

      <div className="bg-white p-4 my-4 rounded shadow d-flex justify-content-between align-items-center">
        <span>Can't see your policy?</span>
        <button className="btn btn-warning" style={{ backgroundColor: '#FF6600' }} onClick={() => router.push('/add-policy')}>Add now +</button>
      </div>

      <section className="my-4 d-flex justify-content-between align-items-center">
  <h2 className="h4 fw-bold">Buy Insurance</h2>
  <Link href="/buy-policy" className=" fw-semibold" style={{color:"#FF6600"}}>View All</Link>
</section>


<div className="row mt-2">
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/health" className="btn btn-light w-100 p-3 shadow d-flex align-items-center justify-content-center">
      <HeartPulse size={20} className="me-2" color="#FF6600" /> Health
    </Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/car" className="btn btn-light w-100 p-3 shadow d-flex align-items-center justify-content-center">
      <Car size={20} className="me-2" color="#FF6600" /> Car
    </Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/bike" className="btn btn-light w-100 p-3 shadow d-flex align-items-center justify-content-center">
      <Bike size={20} className="me-2" color="#FF6600" /> Bike
    </Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/travel" className="btn btn-light w-100 p-3 shadow d-flex align-items-center justify-content-center">
      <Plane size={20} className="me-2" color="#FF6600" /> Travel
    </Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/home" className="btn btn-light w-100 p-3 shadow d-flex align-items-center justify-content-center">
      <HomeIcon size={20} className="me-2" color="#FF6600" /> Home
    </Link>
  </div>
</div>



<section className="my-5 py-4" style={{ background: "linear-gradient(to right, #f8f9fa, #e9ecef)" }}>
  <div className="container">
    <h2 className="h4 fw-bold text-center mb-4">
      Live well and yield <span style={{ color: "#FF6600" }}>rewards</span>
    </h2>
    <div className="row g-4 justify-content-center">
      
      {/* Face Scan Card */}
      <div className="col-md-5">
        <div className="card border-0 shadow-lg p-3 rounded-4">
          <div className="card-body text-center">
            <h3 className="h5 fw-bold">Face Scan</h3>
            <p className="text-muted">Scan your face to get status on your health vitals</p>
            <div className="d-flex align-items-center justify-content-center">
              <img src="/facescan.jfif" alt="Face Scan" className="rounded-circle shadow-sm me-3" 
                style={{ width: '70px', height: '70px' }} />
              <div>
                <p className="mb-1 fw-semibold">HR: -- | SpO2: --</p>
                <p className="mb-1 fw-semibold">RR: -- | HRV: --</p>
                <button className="btn text-white px-4 py-2 mt-2" 
                  style={{ backgroundColor: "#FF6600", borderRadius: "8px" }}
                  onClick={() => router.push('/face-scan')}>
                  Scan now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driving Score Card */}
      <div className="col-md-5">
        <div className="card border-0 shadow-lg p-3 rounded-4">
          <div className="card-body text-center">
            <h3 className="h5 fw-bold">Driving Score</h3>
            <p className="text-muted">You have been driving really well.</p>
            <div className="d-flex align-items-center justify-content-center">
              <img src="/car.jfif" alt="Car" className="rounded-circle shadow-sm me-3" 
                style={{ width: '70px', height: '70px' }} />
              <div>
                <p className="mb-1 fw-semibold">Score: -- | Braking: --</p>
                <p className="mb-1 fw-semibold">Time: -- | Speeding: --</p>
                <button className="btn text-white px-4 py-2 mt-2" 
                  style={{ backgroundColor: "#FF6600", borderRadius: "8px" }}
                  onClick={() => router.push('/driving-score')}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


     

      <div style={{ backgroundColor: '#FFF', color: '#333', marginBottom: '50px', padding: '20px' }}>
      <h5 style={{ color: '#FF6600', textAlign: 'left' }}>Insightful <span style={{ fontWeight: 'bold' }}>blogs</span></h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start', marginTop: '20px' }}>
        {blogs.map(blog => (
          <div key={blog.id} style={{ width: '300px', padding: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', cursor: 'pointer' }} onClick={() => router.push(blog.link)}>
            <img src={blog.image} alt={blog.title} width={300}  height={200} style={{ maxWidth:'100%',borderRadius: '10px' }} />
            <h6 style={{ fontWeight: 'bold', marginTop: '10px' }}>{blog.title}</h6>
            <p style={{ fontSize: '14px', color: '#666' }}>{blog.description}</p>
            <p style={{ fontSize: '12px', color: '#999' }}>{blog.category} . {blog.readTime}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
