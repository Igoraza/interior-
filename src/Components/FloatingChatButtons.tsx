import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface InstagramChatProps {
  profileUrl: string;
  size?: number;
  color?: string;
}

const InstagramChat: React.FC<InstagramChatProps> = ({
  profileUrl,
  size = 32,
  color = '#E1306C',
}) => (
  <a
    href={profileUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram Profile"
    className="bg-pink-500 text-white p-2.5 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
    style={{ display: 'inline-block', lineHeight: 0 }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#fff" />
      <path
        d="M24 16.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm0 12.3a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6zm7.8-12.6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zM24 10c-7.732 0-14 6.268-14 14 0 2.485.678 4.813 1.858 6.813l-1.958 7.187a1 1 0 0 0 1.242 1.242l7.187-1.958A13.96 13.96 0 0 0 24 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm0 25.2c-2.36 0-4.57-.687-6.44-1.872l-.46-.29-5.36 1.46 1.46-5.36-.29-.46A11.97 11.97 0 0 1 12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12z"
        fill={color}
      />
    </svg>
  </a>
);

const FloatingChatButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col md:flex-row items-end md:items-center space-y-3 md:space-y-0 md:space-x-3">
      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=919747738133&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Rethna%20Interiors"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Instagram */}
      <InstagramChat profileUrl="https://www.instagram.com/interiorsrethna/?" />

      {/* Email */}
      <a
        href="mailto:rajesh12r@gmail.com"
        className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
        aria-label="Send Email"
      >
        <MdEmail className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingChatButtons;
