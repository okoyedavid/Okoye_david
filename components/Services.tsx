"use client";

import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedModal] = useState<number | null>(null);
  return (
    <section className="services section" id="services">
      <h2 className="section-title">What I Offer</h2>

      <div className="services-container max-w-6xl mx-auto grid">
        {servicesData.map((item, index) => (
          <div key={index} className="services-content">
            <div>
              <i className={`${item.icon} services-icon`}></i>
              <h3 className="services-title">
                {item.title.split(" ")[0]} <br /> {item.title.split(" ")[1]}
              </h3>
            </div>

            <span
              onClick={() => setSelectedModal(item.id)}
              className="services-button"
            >
              View More{" "}
              <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={`services-modal ${
                item.id === selectedService ? "active-modal" : ""
              }`}
            >
              <div className="services-modal-content">
                <i
                  onClick={() => setSelectedModal(null)}
                  className="uil uil-times services-modal-close"
                ></i>

                <h3 className="services-modal-title">{item.modalTitle}</h3>
                <p className="services-modal-description">
                  {item.modalDescription}
                </p>

                <ul className="services-modal-services grid">
                  {item.services.map((service, i) => (
                    <li key={i} className="services-modal-service">
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{service}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Developer",
    icon: "uil uil-server-network",
    experience: "4+ years professional experience",
    modalTitle: "Full-Stack Developer",
    modalDescription:
      "I develop fast, scalable, and maintainable web applications using modern technologies, from server-side APIs to responsive frontend interfaces.",
    services: [
      "Node.js API Development",
      "React & Next.js Frontend Architecture",
      "Responsive and Accessible UIs",
      "Database Integration (Supabase, MySQL)",
      "Deployment & Hosting (Vercel, Netlify)",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    icon: "uil uil-arrow",
    experience: "Hands-on experience",
    modalTitle: "UI/UX Designer",
    modalDescription:
      "I create intuitive, user-centered layouts that prioritize clarity, usability, and responsiveness—without relying on design software like Figma.",
    services: [
      "Clean and Structured Interface Layouts",
      "Mobile-First & Responsive Design",
      "Component-Based UI Systems",
      "Accessibility Best Practices",
      "User Flow & Page Hierarchy Planning",
    ],
  },
  {
    id: 3,
    title: "Digital Strategist",
    icon: "uil uil-chart-line",
    experience: "2+ years experience",
    modalTitle: "Digital Strategist & Media Manager",
    modalDescription:
      "I support businesses and creators in building their digital presence through strategic content, streamlined workflows, and efficient delivery.",
    services: [
      "Social Media Management",
      "Content Structuring & SEO Awareness",
      "Brand Messaging & Visual Consistency",
      "Portfolio & Personal Brand Strategy",
      "Platform-Specific Optimization",
    ],
  },
];

export interface ServiceItem {
  title: string;
  icon: string;
  experience: string;
  modalTitle: string;
  modalDescription: string;
  services: string[];
}
