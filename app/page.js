"use client";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const blogs = [
    { id: 1, title: 'Motor News And Views', description: 'Stay up-to-date with latest motor news, car reviews.', category: 'Motor', readTime: '2min Read', image: '/motor-news.png', link: '/blogs/motor-news' },
    { id: 2, title: 'Ayurveda Hub', description: 'Everything about Ayurveda, from dadi ke nuskhe.', category: 'Ayurveda', readTime: '2min Read', image: '/ayurveda-hub.png', link: '/blogs/ayurveda-hub' },
    { id: 3, title: 'Wellness Blogs', description: 'Read tips on improving lifestyle, diet and managing health.', category: 'Wellness', readTime: '2min Read', image: '/wellness-blogs.png', link: '/blogs/wellness-blogs' }
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
  <Link href="/buy-policy" className="text-warning fw-semibold">View All</Link>
</section>

<div className="row mt-2">
  <div className="col-6 col-md-4 mb-3">
    <Link href="/buy-policy/health" className="btn btn-light w-100 p-3 shadow">Health</Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="buy-policy/car" className="btn btn-light w-100 p-3 shadow">Car</Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="buy-policy/bike" className="btn btn-light w-100 p-3 shadow">Bike</Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="buy-policy/travel" className="btn btn-light w-100 p-3 shadow">Travel</Link>
  </div>
  <div className="col-6 col-md-4 mb-3">
    <Link href="buy-policy/home" className="btn btn-light w-100 p-3 shadow">Home</Link>
  </div>
</div>

{/* <nav className="navbar fixed-bottom bg-white shadow">
  <div className="container d-flex justify-content-around">
    <Link href="/" className="nav-link">Home</Link>
    <Link href="/policies" className="nav-link">Policies</Link>
    <Link href="/benefits" className="nav-link">Benefits</Link>
    <Link href="/buy-policy" className="nav-link">Buy</Link>
    <Link href="/help" className="nav-link">Help</Link>
  </div>
</nav> */}

<section className="my-4">
    <h2 className="h5 fw-bold">Live well and yield <span className="text-warning">rewards</span></h2>
    <div className="row g-2">
      <div className="col-md-6">
        <div className="card shadow mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <h3 className="h6 fw-bold">Face Scan</h3>
            <p>Scan your face to get status on your health vitals</p>
            <div className="d-flex align-items-center">
              <img src="/facescan.jfif" alt="Face Scan" className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
              <div>
                <p className="mb-1">HR: -- | SpO2: --</p>
                <p className="mb-1">RR: -- | HRV: --</p>
                <button className="btn btn-warning btn-sm" onClick={() => router.push('/face-scan')}>Scan now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="card shadow mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <h3 className="h6 fw-bold">Driving Score</h3>
            <p>You have been driving really well.</p>
            <div className="d-flex align-items-center">
              <img src="/car.jfif" alt="Car" className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
              <div>
                <p className="mb-1">Score: -- | Braking: --</p>
                <p className="mb-1">Time: --  | Speeding: --</p>
                <button className="btn btn-warning btn-sm" onClick={() => router.push('/driving-score')}>View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* <section className="my-4">
        <h2 className="h5 fw-bold">Customer <span className="text-warning">delight</span></h2>
        <div className="bg-white p-3 rounded shadow">
          <blockquote className="blockquote mb-0">
            <p>"Your service support and network is very good."</p>
            <footer className="blockquote-footer">Gaurang Desai</footer>
          </blockquote>
        </div>
      </section> */}

      <div style={{ backgroundColor: '#FFF', color: '#333', marginBottom: '50px', padding: '20px' }}>
      <h5 style={{ color: '#FF6600', textAlign: 'left' }}>Insightful <span style={{ fontWeight: 'bold' }}>blogs</span></h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start', marginTop: '20px' }}>
        {blogs.map(blog => (
          <div key={blog.id} style={{ width: '300px', padding: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px', cursor: 'pointer' }} onClick={() => router.push(blog.link)}>
            <img src={blog.image} alt={blog.title} width={300} height={200} style={{ borderRadius: '10px' }} />
            <h6 style={{ fontWeight: 'bold', marginTop: '10px' }}>{blog.title}</h6>
            <p style={{ fontSize: '14px', color: '#666' }}>{blog.description}</p>
            <p style={{ fontSize: '12px', color: '#999' }}>{blog.category} . {blog.readTime}</p>
          </div>
        ))}
      </div>
    </div>



      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/home" className="nav-link active">Home</Link>
          <Link href="/policies" className="nav-link">Policies</Link>
          <Link href="/benefits" className="nav-link">Benefits</Link>
          <Link href="/buy-policy" className="nav-link">Buy</Link>
          <Link href="/help" className="nav-link">Help</Link>
        </div>
      </nav>
    </div>
    
  );
}
