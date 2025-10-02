import { getProfileData } from '@/lib/data';
import { MapPin, Phone, Mail, Download } from 'lucide-react';

export default function ContactPage() {
  const profile = getProfileData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact AL HADI EXPORTS
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with us for inquiries, quotes, or partnership opportunities. 
              We're here to help you with your garment manufacturing needs.
            </p>
            <a 
              href="/api/download-profile"
              className="btn-secondary !bg-white !text-blue-900 hover:!bg-gray-100 inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Company Profile
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We welcome your inquiries and look forward to building successful business relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">+92-21-1234567</p>
                <p className="text-sm text-gray-500">Business Hours: 9:00 AM - 6:00 PM</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">info@alhadiexports.pk</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 mb-2">{profile.headquarters}</p>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}