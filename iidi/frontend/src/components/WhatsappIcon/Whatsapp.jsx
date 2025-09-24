import { FaWhatsapp } from 'react-icons/fa' 
// WhatsApp Floating Button Component
const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/+919761954123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center w-14 h-14">
        {/* Pulsing Circle */}
        <div className="absolute inset-0 bg-green-500 rounded-full opacity-70 animate-ping"></div>
        {/* Solid Circle with Hover Scale */}
        <div className="absolute inset-0 bg-green-600 rounded-full transform transition-transform duration-300 group-hover:scale-110"></div>
        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative text-white w-7 h-7" />
      </div>
      {/* Tooltip on Hover */}
      <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  )
}

export default WhatsApp