import { getProfileData } from '@/lib/data';
import { ArrowRight, Award, Globe, Users, Factory, Package } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const profile = getProfileData();

  const stats = [
    { icon: Users, label: 'Global Customers', value: '50+' },
    { icon: Package, label: 'Products Range', value: profile.product_range.length.toString() },
    { icon: Award, label: 'Certifications', value: profile.certifications.length.toString() },
    { icon: Globe, label: 'Export Markets', value: '3' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium Garment
                <span className="text-blue-600"> Manufacturing</span>
                & Export Excellence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {profile.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary inline-flex items-center" aria-label="View our products">
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center" aria-label="Contact us">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Machines</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Workers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {profile.vision_mission.vision}
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {profile.vision_mission.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Certifications</h2>
          <p className="section-subtitle">
            We maintain the highest standards of quality and compliance with internationally recognized certifications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="card text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert}</h3>
                <p className="text-gray-600 text-sm">Industry Standard</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            From basic essentials to fashion-forward pieces, we manufacture a wide variety of high-quality garments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.product_range.slice(0, 6).map((product, index) => (
              <div key={index} className="card">
                <div className="bg-blue-100 rounded-lg p-4 mb-4 flex items-center justify-center h-32">
                  <Package className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product}</h3>
                <p className="text-gray-600 text-sm">Premium Quality Manufacturing</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="btn-primary inline-flex items-center">
              View Complete Product Range
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your garment designs to life with our manufacturing expertise.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
