'use client';
import { Car, FileText, MapPin, Settings, ShieldCheck, Truck, Activity, AlertTriangle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function BenefitsMotorPage() {
  const router = useRouter();
  return (
    <div className="container py-5">
      {/* Tabs */}
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-light" onClick={() => router.push("/benefits/featured")}>Featured</button>
        <button className="btn btn-light" onClick={() => router.push("/benefits/health")}>Health</button>
        <button className="btn btn-warning text-white" onClick={() => router.push("/benefits/motor")}>Motor</button>
      </div>

      {/* No Benefits */}
      <div className="bg-light p-5 rounded text-center mb-4">
        <Car className="text-warning" size={50} />
        <p className="fs-4 fw-bold mt-3">No premium benefits found</p>
        <div className="d-flex justify-content-center mt-3">
          <input
            type="text"
            placeholder="Can't see your policy?"
            className="form-control w-50 me-2"
          />
          <button className="btn btn-warning text-white">Add now +</button>
        </div>
      </div>

      {/* App Features */}
      <h2 className="fs-3 fw-bold mb-4">App <span className="text-warning">Featured</span></h2>

      <div className="row g-4">
        <div className="col-md-4"><FeatureCard icon={FileText} title="Driving Licence" desc="Get your digital driving licence" /></div>
        <div className="col-md-4"><FeatureCard icon={ShieldCheck} title="PUC Validity" desc="Check your PUC validity" /></div>
        <div className="col-md-4"><FeatureCard icon={MapPin} title="View Challans" desc="View all your traffic challans" /></div>
        <div className="col-md-4"><FeatureCard icon={Truck} title="IL DriveSmart" desc="Check your driving score" /></div>
        <div className="col-md-4"><FeatureCard icon={Settings} title="Mobile Self Inspection" desc="Do a self inspection in case of brake-in" /></div>
        <div className="col-md-4"><FeatureCard icon={Activity} title="Blogs" desc="Read blogs from experts" /></div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="card shadow-sm p-4 text-center">
      <Icon className="text-warning" size={40} />
      <h3 className="fs-5 fw-bold mt-3">{title}</h3>
      <p className="text-muted mt-2">{desc}</p>
    </div>
  );
}
