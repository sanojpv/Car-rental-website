import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Footer = () => {
    const theme=useSelector(state=>state.theme.value)
  return (
    <footer className={theme== 'light'?"bg-gray-300 text-black py-10 ":"bg-gray-900 text-gray-200 py-10 border-t-4 border-amber-500"}>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-violet-700 mb-3">EuropeDrive</h1>
          <p className="text-sm text-gray-700">
            Affordable car rentals with flexible pickup options and 24/7 support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-violet-700 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'about'}>About</Link></li>
          <li><Link to={'carlist'}>Cars</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-violet-700 mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 Kochi, Kerala, India</li>
            <li>📞 +91 3214 43210</li>
            <li>✉️ support@europedrive.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-violet-700 mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500">🌐</a>
            <a href="#" className="hover:text-blue-400">🔗</a>
            <a href="#" className="hover:text-pink-500">📸</a>
            <a href="#" className="hover:text-blue-700">📘</a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}EuropeDrive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
