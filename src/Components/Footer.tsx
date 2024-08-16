import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 font-sans mt-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Left Section */}
          <div className="lg:w-1/4">
            <h2 className="text-3xl font-bold text-black mb-4 font-mono">interiorfirm</h2>
            <p className="text-sm">
              Interiorfirm is an acclaimed multidisciplinary studio specializing
              in interior architecture, interior design.
            </p>
          </div>
          {/* Right Section */}
          <div className="flex flex-wrap gap-10 lg:gap-16">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>Career</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Feature</li>
                <li>Story</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Design</h3>
              <ul className="space-y-2 text-sm">
                <li>2D Designer</li>
                <li>3D Designer</li>
                <li>Collaboration</li>
                <li>Tools</li>
                <li>Important Link</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Projects</li>
                <li>Contact</li>
                <li>Send Email</li>
                <li>Fivver</li>
                <li>upWork</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Material</h3>
              <ul className="space-y-2 text-sm">
                <li>Company Profile</li>
                <li>Asset</li>
                <li>Location Map</li>
                <li>Estimate Cost</li>
                <li>Default Quotation</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-6 text-xs text-gray-600">
          <div>© Copyright 2024 Interiorfirm — All Rights Reserved.</div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
