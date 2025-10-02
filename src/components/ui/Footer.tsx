'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Award,
  Shield,
  Globe,
  Factory
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ];

  const productCategories = [
    { name: 'T-Shirts & Tops', href: '/products?category=tshirts' },
    { name: 'Pants & Trousers', href: '/products?category=pants' },
    { name: 'Dresses & Skirts', href: '/products?category=dresses' },
    { name: 'Outerwear', href: '/products?category=outerwear' },
    { name: 'Activewear', href: '/products?category=activewear' },
    { name: 'Workwear', href: '/products?category=workwear' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: Award },
    { name: 'OEKO-TEX', icon: Shield },
    { name: 'WRAP Certified', icon: Globe },
    { name: 'BSCI Compliant', icon: Factory },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/alhadiexports', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/alhadiexports', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/alhadiexports', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/alhadiexports', icon: Linkedin },
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <footer className={`bg-neutral-900 text-white ${className}`} role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">AL</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">AL HADI EXPORTS</h3>
                <p className="text-sm text-neutral-400">Premium Garments Manufacturer</p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed">
              Leading manufacturer and exporter of high-quality garments from Pakistan, 
              serving global markets with premium textile products and exceptional service.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-800 hover:bg-primary-600 rounded-lg transition-colors duration-200 focus-ring"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Headquarters</p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Plot No. 123, Industrial Area<br />
                    Karachi-74000, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a 
                    href="tel:+92211234567" 
                    className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 focus-ring"
                  >
                    +92-21-1234567
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a 
                    href="mailto:info@alhadiexports.com" 
                    className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 focus-ring"
                  >
                    info@alhadiexports.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <h4 className="font-medium text-white">Business Hours</h4>
              </div>
              <div className="space-y-1 text-sm text-neutral-300">
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span className={schedule.time === 'Closed' ? 'text-red-400' : 'text-neutral-300'}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 focus-ring py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Product Categories */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Product Categories</h4>
              <div className="space-y-1">
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-sm text-neutral-300 hover:text-primary-400 transition-colors duration-200 focus-ring block py-1"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-neutral-800 p-3 rounded-lg text-center hover:bg-neutral-700 transition-colors duration-200"
                >
                  <cert.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <p className="text-xs text-neutral-300 font-medium">{cert.name}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Stay Updated</h4>
              <p className="text-xs text-neutral-400">
                Subscribe to our newsletter for latest updates and offers.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus-ring"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-400">
                © {new Date().getFullYear()} AL HADI EXPORTS. All rights reserved.
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Premium Garments Manufacturer & Exporter from Pakistan
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus-ring"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus-ring"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 focus-ring"
              >
                Sitemap
              </Link>
              <div className="text-neutral-500">
                Made with ❤️ in Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus-ring z-40"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;