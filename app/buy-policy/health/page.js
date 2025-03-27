"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function HealthBuyPolicy() {
  const router = useRouter();

  const policies = [
    {
      title: "Elevate - Health Insurance",
      tag: "Most Popular",
      description: [
        "Hospitalisation & Day Care Treatment cover",
        "Reset of SI unlimited times",
        "Customisable waiting periods",
      ],
      route: "/buy-policy/health/elevate"
    },
    {
      title: "MaxProtect",
      description: [
        "Unlimited Sum Insured product",
        "Affordable Pricing",
        "Unlimited Teleconsultation",
      ],
      route: "/buy-policy/health/maxprotect"
    },
    {
      title: "Activate Booster (Combo*)",
      description: [
        "Covers pre & post-hospitalisation medical expenses**",
        "Covers day care procedures/treatments",
        "Unlimited teleconsultations#",
      ],
      route: "/buy-policy/health/booster-combo"
    },
    {
      title: "Activate Booster",
      description: [
        "Flexible coverage",
        "Higher sum insured at affordable premium",
        "In-patient treatment cover",
      ],
      route: "/buy-policy/health/booster"
    },
    {
      title: "Health AdvantEdge",
      description: [
        "24/7 Video/Teleconsultation",
        "Personal accident cover",
        "Health rewards and many more",
      ],
      route: "/buy-policy/health/advantedge"
    },
  ];

  return (
    <div className="container-fluid bg-dark text-white min-vh-100">
      {/* Header */}
      <div className="d-flex align-items-center p-3">
        <Link href="/buy">
          <span className="text-white fs-4">&larr;</span>
        </Link>
        <h2 className="ms-3 text-warning fw-bold mb-0">Health Buy Policy</h2>
      </div>

      {/* Policy Cards */}
      <div className="container py-3">
        {policies.map((policy, index) => (
          <div key={index} className="card mb-3 shadow border-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">{policy.title}</h5>
                {policy.tag && (
                  <span className="badge bg-warning text-dark">{policy.tag}</span>
                )}
              </div>
              <ul className="mt-2 text-secondary">
                {policy.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/know-more" className="text-warning fw-semibold">
                  Know More
                </Link>
                <button
                  className="btn btn-warning text-white fw-bold"
                  onClick={() => router.push(policy.route)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-secondary small py-2">
        *Activate Booster, when purchased along with Elevate base plan.
      </div>
    </div>
  );
}
