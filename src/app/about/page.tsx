import { getProfileData } from '@/lib/data';
import { Award, Users, Factory, Globe, Target, Eye, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const profile = getProfileData();
  const { vision_mission, major_customers, stitching_facility, embroidery_dyeing_facility } = profile;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AL HADI EXPORTS
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Leading garments manufacturer and exporter based in Karachi, Pakistan, 
              delivering premium quality apparel to global markets since our establishment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Factory className="w-5 h-5" />
                <span>Modern Facilities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5" />
                <span>Global Export</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Certified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <p className="text-gray-600 mb-6">
                {profile.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Skilled Workers</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Production Lines</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25M+</div>
                  <div className="text-sm text-gray-600">Annual Capacity</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Export Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Head Office</div>
                  <div className="text-gray-600">{profile.headquarters}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+92-21-1234567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">info@alhadiexports.pk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-subtitle">
              Our commitment to excellence and innovation drives everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">{vision_mission.vision}</p>
            </div>
            <div className="card text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">{vision_mission.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Customers */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Valued Customers</h2>
            <p className="section-subtitle">
              We are proud to partner with leading brands and retailers worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {major_customers.USA.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <Users className="w-12 h-12 text-gray-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{customer}</h3>
                  <p className="text-sm text-gray-600">USA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Facilities */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Production Facilities</h2>
            <p className="section-subtitle">
              State-of-the-art manufacturing facilities equipped with modern machinery and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stitching Facility */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Factory className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Stitching Facility</h3>
                  <p className="text-gray-600">Main Production Unit</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm space-y-1">
                  {Object.entries(stitching_facility as Record<string, number>).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span>{key}:</span>
                      <span className="font-medium">{value} machines</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Embroidery & Dyeing Facility */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Factory className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Embroidery & Dyeing</h3>
                  <p className="text-gray-600">Value Addition Unit</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Embroidery:</span>
                    <span className="font-medium">{embroidery_dyeing_facility.embroidery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dyeing Unit:</span>
                    <span className="font-medium">{embroidery_dyeing_facility.dyeing_unit.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with AL HADI EXPORTS
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied customers and experience the difference of working with 
            a reliable, quality-focused garments manufacturer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary !bg-white !text-blue-900 hover:!bg-gray-100">
              Get in Touch
            </a>
            <a href="/products" className="btn-primary !bg-white/20 !text-white hover:!bg-white/30">
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}