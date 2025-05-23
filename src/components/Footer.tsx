// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social icons */}
        <div className="social flex space-x-4 items-center">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Icons/X-Logo.png"
              alt="X (Twitter)"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Icons/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Icons/YouTube.svg"
              alt="YouTube"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Icons/LinkedIn.svg"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>

        {/* Use cases */}
        <div>
          <h4 className="font-semibold mb-2">Use cases</h4>
          <ul className="space-y-1">
            <li>Dentists</li>
            <li>Doctors & General Practitioners</li>
            <li>Physical Therapists</li>
            <li>Chiropractors</li>
            <li>Orthodontists</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>API Docs</li>
            <li>Integration</li>
            <li>Support</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
