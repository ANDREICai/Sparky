import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* About / Logo */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white">MA Electricians</h2>
          <p className="text-gray-400">
            Reliable, professional, and fast electrical services in West Lothian.
          </p>
        </div>

         {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link  to="/" className="hover:text-yellow-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>

             <Link  to="/Services" className="hover:text-yellow-400 transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link  to="/Contact" className="hover:text-yellow-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>


        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 
              <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors">
                
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> 
              <a href="mailto:info@example.com" className="hover:text-yellow-400 transition-colors">
                
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 
             
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
