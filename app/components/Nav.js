"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Home, FileText, Gift, ShoppingCart, HelpCircle } from "lucide-react";

export default function NavigationBar() {
    return (
        <nav className="navbar fixed-bottom bg-white shadow-lg p-2">
            <div className="container d-flex justify-content-around">
                <Link href="/" className="nav-link d-flex flex-column align-items-center text-dark">
                    <Home size={24} />
                    <span className="small">Home</span>
                </Link>
                <Link href="/policies" className="nav-link d-flex flex-column align-items-center text-dark">
                    <FileText size={24} />
                    <span className="small">Policies</span>
                </Link>
                <Link href="/benefits" className="nav-link d-flex flex-column align-items-center text-dark">
                    <Gift size={24} />
                    <span className="small">Benefits</span>
                </Link>
                <Link href="/buy-policy" className="nav-link d-flex flex-column align-items-center text-dark">
                    <ShoppingCart size={24} />
                    <span className="small">Buy</span>
                </Link>
                <Link href="/help" className="nav-link d-flex flex-column align-items-center text-dark">
                    <HelpCircle size={24} />
                    <span className="small">Help</span>
                </Link>
            </div>
        </nav>
    );
}
