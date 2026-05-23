import { Link } from 'react-router-dom'
import { Compass, Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa'

const footerLinks = {
  explore: [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Hidden Gems', path: '/destinations?filter=hidden-gems' },
    { name: 'Trip Planner', path: '/trip-planner' },
    { name: 'Blogs', path: '/blogs' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
  ],
  support: [
    { name: 'Help Center', path: '#' },
    { name: 'Safety', path: '#' },
    { name: 'Cancellation', path: '#' },
    { name: 'COVID-19', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 
                              flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Safar<span className="text-blue-400">Nama</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Discover India's most beautiful destinations, hidden gems, and unforgettable 
                travel experiences with SafarNama.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>hello@safarnama.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row 
                        items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 SafarNama. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaTwitter, FaYoutube, FaFacebookF].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}