import { getProfileData } from '@/lib/data';
import { ArrowRight, Award, Globe, Users, Factory, Package, Wrench, Palette, Droplets, Sparkles, Leaf, Recycle, Wind } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const profile = getProfileData();

  const stats = [
    { icon: Users, label: 'Global Customers', value: '50+' },
    { icon: Package, label: 'Products Range', value: profile.product_range.length.toString() },
    { icon: Award, label: 'Certifications', value: profile.certifications.length.toString() },
    { icon: Globe, label: 'Export Markets', value: '3' },
  ];

  const services = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'State-of-the-art production facilities with advanced machinery and skilled workforce',
      features: ['500+ Stitching Machines', 'In-house Production', 'Quality Control']
    },
    {
      icon: Palette,
      title: 'Sampling & Pattern Making',
      description: 'Expert sampling and pattern development with in-house expertise',
      features: ['Pattern Development', 'Sample Creation', 'Design Consultation']
    },
    {
      icon: Droplets,
      title: 'Dyeing',
      description: 'Specialized dyeing services with premium color fastness and consistency',
      features: ['High-capacity Jet Dyeing', 'Soft Flow Technology', 'Color Matching']
    },
    {
      icon: Sparkles,
      title: 'Finishing',
      description: 'Comprehensive finishing services for superior garment quality',
      features: ['Heat Setting', 'Compacting', 'Raising & Tumbler']
    }
  ];

  const totalMachines = Object.values(profile.stitching_facility).reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                {profile.company_name}
                <span className="text-blue-600 block mt-2">Global Garment Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-200">
                {profile.description} From concept to creation, we transform your vision into premium garments that meet the highest international standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <Link href="/products" className="btn-primary inline-flex items-center group" aria-label="View our products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center group" aria-label="Contact us">
                  Schedule Factory Tour
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-600">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 rounded-lg p-4 text-center hover:bg-blue-200 transition-colors">
                    <Factory className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{totalMachines}+</div>
                    <div className="text-sm text-gray-600">Machines</div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center hover:bg-green-200 transition-colors">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Skilled Workers</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-500">Headquarters: {profile.headquarters}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete garment manufacturing solutions from design to delivery, ensuring quality at every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-blue-600 font-medium">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Ecosystem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Trusted by leading global brands across USA, Europe, and Middle East markets
            </p>
          </div>
          
          {/* Global Presence Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">USA Market</h3>
              <p className="text-gray-600">{profile.major_customers.USA.length} Major Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">European Market</h3>
              <p className="text-gray-600">{profile.major_customers.Europe.length} Major Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Middle East</h3>
              <p className="text-gray-600">{profile.major_customers["Saudi Arabia"].length} Major Customers</p>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Valued Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...profile.major_customers.USA.slice(0, 4), ...profile.major_customers.Europe.slice(0, 2)].map((customer, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">{customer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainability Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in sustainable garment manufacturing with globally recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Eco Practices</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Leaf className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Sustainable material sourcing</span>
                </div>
                <div className="flex items-center">
                  <Recycle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Waste reduction and recycling programs</span>
                </div>
                <div className="flex items-center">
                  <Wind className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Energy-efficient manufacturing processes</span>
                </div>
                <div className="flex items-center">
                  <Droplets className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Water conservation and treatment systems</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {profile.certifications.filter(cert => ['HIGG', 'SEDEX', 'BSCI'].includes(cert)).map((cert, index) => (
                  <div key={index} className="bg-green-100 rounded-lg p-4 text-center hover:bg-green-200 transition-colors">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-green-800">{cert}</div>
                    <div className="text-sm text-green-600">Certified</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sustainability CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner with Us for a Sustainable Future</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us in creating high-quality garments while maintaining environmental responsibility and ethical manufacturing practices.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Learn About Our Sustainability Initiatives
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up animation-delay-200">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:bg-blue-200 transition-colors">
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
          <h2 className="section-title animate-fade-in-up">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card animate-fade-in-up animation-delay-200">
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
            <div className="card animate-fade-in-up animation-delay-400">
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
          <h2 className="section-title animate-fade-in-up">Our Certifications</h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            We maintain the highest standards of quality and compliance with internationally recognized certifications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="card text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:bg-blue-200 transition-colors">
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
          <h2 className="section-title animate-fade-in-up">Our Product Range</h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            From basic essentials to fashion-forward pieces, we manufacture a wide variety of high-quality garments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.product_range.slice(0, 6).map((product, index) => (
              <div key={index} className="card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-blue-100 rounded-lg p-4 mb-4 flex items-center justify-center h-32 hover:bg-blue-200 transition-colors">
                  <Package className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product}</h3>
                <p className="text-gray-600 text-sm">Premium Quality Manufacturing</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 animate-fade-in-up animation-delay-600">
            <Link href="/products" className="btn-primary inline-flex items-center group">
              View Complete Product Range
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Transform Your Garment Vision into Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Join our global network of satisfied partners. From initial concept to final delivery, we're committed to exceeding your expectations with premium quality, competitive pricing, and unmatched reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/contact" className="btn-secondary inline-flex items-center group bg-white text-blue-600 hover:bg-gray-100">
              Schedule Factory Tour
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="btn-primary inline-flex items-center group border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="mt-8 text-blue-200 animate-fade-in-up animation-delay-600">
            <p className="text-sm">Trusted by 50+ global brands • Serving USA, Europe & Middle East markets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
