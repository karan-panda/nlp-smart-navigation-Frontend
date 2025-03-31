"use client";
import { useRouter } from 'next/navigation';

export default function Policies() {
  const router = useRouter();
    return (
      <div style={{ padding: '20px', backgroundColor: '#FFF', color: '#333', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        
        {/* Header */}
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Policies</h1>
  
        {/* Category Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button style={{ padding: '10px 20px', backgroundColor: '#F4F4F4', border: 'none', borderRadius: '20px', color: '#333' }} onClick={() => router.push('/policies')}>Health</button>
          <button style={{ padding: '10px 20px', backgroundColor: '#F4F4F4', border: 'none', borderRadius: '20px', color: '#333' }} onClick={() => router.push('/policies/vehicle')}>Vehicle</button>
          <button style={{ padding: '10px 20px', backgroundColor: '#F4F4F4', border: 'none', borderRadius: '20px', color: '#333' }} onClick={() => router.push('/policies/travel')}>Travel</button>
          <button style={{ padding: '10px 20px', backgroundColor: '#FF6600', color: '#FFF', border: 'none', borderRadius: '20px', fontWeight: 'bold' }} onClick={() => router.push('/policies/home')}>Home</button>
        </div>
  
        {/* Recent Policy Section */}
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #FF6600', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold' }}>View your recently purchased</span>
          <span style={{ color: '#FF6600', fontWeight: 'bold', cursor: 'pointer' }}>Upcoming policy &gt;</span>
        </div>
  
        {/* No Policy Found Message */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ fontSize: '50px' }}>📄❗</div> {/* Placeholder for the image */}
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px' }}>Oops! No policy found</h2>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Click <span style={{ fontWeight: 'bold' }}>'Buy policy'</span> to explore our insurance products directly from the app.
          </p>
          <button style={{ padding: '12px 25px', backgroundColor: '#FF6600', color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' }} onClick={() => router.push('/buy-policy/home')}>Buy policy</button>
        </div>
  
        {/* Separator */}
        <div style={{ textAlign: 'center', margin: '30px 0', color: '#999' }}>— Or —</div>
  
        {/* Add Policy Section */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Can't see your policy? Click <span style={{ fontWeight: 'bold' }}>'Add policy'</span> to avail app exclusive services.
          </p>
          <button style={{ padding: '12px 25px', backgroundColor: '#FFF', color: '#FF6600', border: '2px solid #FF6600', borderRadius: '8px', fontSize: '16px', cursor: 'pointer' }} onClick={() => router.push('/add-policy/home')}>Add policy</button>
        </div>

        <div style={{height:"200px"}}></div>
      </div>
    );
  }
  