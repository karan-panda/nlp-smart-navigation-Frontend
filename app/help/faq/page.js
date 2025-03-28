"use client";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FAQs() {
  const faqs = [
    { question: "What is insurance?", answer: "Insurance is a contract that provides financial protection against losses." },
    { question: "How do I buy a policy?", answer: "You can buy a policy online through our website or mobile app." },
    { question: "Can I cancel my policy?", answer: "Yes, you can cancel your policy within the cooling-off period." },
    { question: "What documents are required?", answer: "It depends on the type of policy, but usually an ID proof and address proof are needed." },
  ];

  return (
    <div className="container-fluid min-vh-100 p-4 bg-light">
      <header className="p-3 bg-white shadow-sm rounded text-center">
        <h1 className="h4 fw-bold">❓ Frequently Asked Questions</h1>
      </header>

      <div className="bg-white p-3 my-4 rounded shadow">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            <h6 className="fw-bold">👉 {faq.question}</h6>
            <p className="text-muted">{faq.answer}</p>
            {index !== faqs.length - 1 && <hr />}
          </div>
        ))}
      </div>

      <nav className="navbar fixed-bottom bg-white shadow">
        <div className="container d-flex justify-content-around">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/policies" className="nav-link">Policies</Link>
          <Link href="/benefits" className="nav-link">Benefits</Link>
          <Link href="/buy-policy" className="nav-link">Buy</Link>
          <Link href="/help" className="nav-link active">Help</Link>
        </div>
      </nav>
    </div>
  );
}
