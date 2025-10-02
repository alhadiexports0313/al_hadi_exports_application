import { getProfileData } from '@/lib/data';
import { Package, Shirt, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function ProductsPage() {
  const profile = getProfileData();
  const { productRange } = profile;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Premium quality garments crafted with precision and care. From basic tees to high-fashion outerwear, 
              we deliver excellence in every stitch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Package className="w-5 h-5" />
                <span>Global Standards</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Customer Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle">
              We specialize in manufacturing a wide range of garments using various fabrics and techniques, 
              catering to diverse market segments and customer preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productRange.categories.map((category, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Shirt className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Key Products:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.products.slice(0, 4).map((product, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-blue-600 font-medium">
                        +{category.products.length - 4} more products
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics & Materials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Fabrics & Materials</h2>
            <p className="section-subtitle">
              We work with premium quality fabrics sourced from trusted suppliers, ensuring durability, 
              comfort, and style in every garment we produce.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {productRange.fabrics.map((fabric, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3">
                  <Package className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900">{fabric}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality Standards & Certifications
              </h2>
              <p className="text-gray-600 mb-8">
                Our commitment to quality is reflected in our certifications and adherence to international 
                standards. We ensure every product meets the highest quality benchmarks.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ISO 9001:2015 Certified</h3>
                    <p className="text-gray-600 text-sm">Quality Management System</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">OEKO-TEX Standard 100</h3>
                    <p className="text-sm text-gray-600">Certified for harmful substances</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BSCI Compliant</h3>
                    <p className="text-sm text-gray-600">Business Social Compliance Initiative</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Control Process</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-gray-700">Incoming Material Inspection</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-gray-700">In-process Quality Checks</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-gray-700">Final Product Inspection</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-gray-700">Packaging & Shipping Review</span>
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
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with AL HADI EXPORTS for premium quality garments that meet your exact specifications. 
            Let's discuss your requirements and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary !bg-white !text-blue-900 hover:!bg-gray-100">
              Request a Quote
            </a>
            <a href="/about" className="btn-primary !bg-white/20 !text-white hover:!bg-white/30">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}