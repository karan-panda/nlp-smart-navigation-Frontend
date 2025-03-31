"use client";
import { Heart, Car, Activity, ShieldCheck, Moon, Footprints } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

export default function BenefitsPage() {
  const router = useRouter();

  return (
    <div className="container py-4">
      {/* Tabs */}
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-warning text-white" onClick={() => router.push("/benefits/featured")}>Featured</button>
        <button className="btn btn-light" onClick={() => router.push("/benefits/health")}>Health</button>
        <button className="btn btn-light" onClick={() => router.push("/benefits/motor")}>Motor</button>
      </div>
      
      {/* Driving Score */}
      <div className="bg-light p-3 rounded d-flex align-items-center gap-3 mb-4">
        <Car className="text-primary" size={40} />
        <div>
          <h2 className="h5">Driving <span className="text-warning">Score</span></h2>
          <p className="text-muted">Great driving! Your score reflects safe and smart driving habits—keep it up!</p>
        </div>
      </div>
      
      {/* Health Highlights */}
      <div className="bg-danger bg-opacity-10 p-3 rounded mb-4">
        <h3 className="h5 d-flex align-items-center gap-2">
          <Activity className="text-danger" /> Your <span className="text-warning">Activity</span>
        </h3>
        <p className="text-muted">Run errands on feet! Walking to the grocery store can help hit your step goal.</p>
        <div className="d-flex gap-3 mt-3">
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <Activity className="text-warning" /> Active Hours
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <Moon className="text-primary" /> Sleep Hours
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <Footprints className="text-info" /> Steps
          </div>
        </div>
      </div>
      
      {/* Face Scan */}
      <div className="bg-warning bg-opacity-10 p-3 rounded mb-4">
        <h3 className="h5 d-flex align-items-center gap-2">
          <ShieldCheck className="text-warning" /> Face Scan
        </h3>
        <p className="text-muted">Regular checkups are your best defense against unexpected health challenges.</p>
        <div className="row mt-3">
          <div className="col-md-4 text-center bg-white p-3 rounded shadow-sm">
            <Heart className="text-danger" />
            <p className="fw-bold">57 BPM</p>
            <p className="text-muted">Heart Rate</p>
          </div>
          <div className="col-md-4 text-center bg-white p-3 rounded shadow-sm">
            <Activity className="text-danger" />
            <p className="fw-bold">13 BPM</p>
            <p className="text-muted">Respiratory Rate</p>
          </div>
          <div className="col-md-4 text-center bg-white p-3 rounded shadow-sm">
            <ShieldCheck className="text-danger" />
            <p className="fw-bold">67 MS</p>
            <p className="text-muted">Heart Rate Variability</p>
          </div>
        </div>
      </div>
      
      {/* ABHA ID */}
      <div className="bg-primary bg-opacity-10 p-3 rounded">
        <h3 className="h5 text-primary">Get your <span className="text-warning">ABHA ID</span></h3>
        <p className="text-muted">Secure digital access to health records and healthcare services.</p>
        <div className="d-flex gap-3 mt-3">
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <ShieldCheck className="text-primary" /> Unified Health Records
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <Activity className="text-success" /> Seamless Healthcare Access
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <ShieldCheck className="text-primary" /> Enhanced Privacy & Security
          </div>
        </div>
      </div>

      <div className="bg-primary bg-opacity-10 p-3  mt-5 rounded">
        <h3 className="h5 text-primary">Manage <span className="text-warning">Documents</span></h3>
        <p className="text-muted">Secure digital access to health records and healthcare services.</p>
        <div className="d-flex gap-3 mt-3">
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <ShieldCheck className="text-primary" /> Unified Health Records
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <Activity className="text-success" /> Seamless Healthcare Access
          </div>
          <div className="bg-white p-3 rounded shadow-sm d-flex align-items-center gap-2">
            <ShieldCheck className="text-primary" /> Enhanced Privacy & Security
          </div>
        </div>
      </div>
      <div style={{height:"200px"}}></div>
    </div>
  );
}
