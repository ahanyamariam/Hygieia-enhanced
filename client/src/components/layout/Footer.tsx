import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { ROUTES } from '@/utils/constants'

const footerLinks = {
  company: [
    { name: 'About Us', href: ROUTES.ABOUT },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Find Doctors', href: ROUTES.DOCTORS },
    { name: 'Video Consultation', href: '/video-consultation' },
    { name: 'Pharmacy', href: ROUTES.PHARMACY },
    { name: 'Lab Tests', href: ROUTES.LAB_TESTS },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: ROUTES.CONTACT },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={ROUTES.HOME} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
                <Heart className="h-6 w-6" />
              </div>
              <span className="font-display text-xl font-bold text-white">Hygieia</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Your trusted healthcare partner. Access quality healthcare from the comfort of your home.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:support@hygieia.com"
                className="flex items-center gap-3 text-sm hover:text-white"
              >
                <Mail className="h-4 w-4" />
                support@hygieia.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm hover:text-white">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4" />
                123 Health Street, Medical City
              </p>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-500 hover:text-white"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Hygieia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}