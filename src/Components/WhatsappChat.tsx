import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end space-x-2">
      {/* Floating Label */}
      {/* <div className="bg-white text-gray-800 text-sm px-3 py-1 rounded-md shadow-md mb-1 translate-y-[-4px] translate-x-[-4px]">
         Chat with us
      </div> */}

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919747738133"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
