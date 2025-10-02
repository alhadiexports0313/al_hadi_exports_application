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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                  {profile.company_name}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 animate-fade-in-up animation-delay-100">
                  Global Garment Excellence
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
                {profile.description} From concept to creation, we transform your vision into premium garments that meet the highest international standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-400">
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
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete garment manufacturing solutions from design to delivery, ensuring quality at every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center space-y-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-blue-600 font-medium">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Ecosystem Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Strategic Ecosystem</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading global brands across USA, Europe, and Middle East markets
            </p>
          </div>
          
          {/* Global Presence Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
            <div className="text-center space-y-6">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">USA Market</h3>
                <p className="text-gray-600">{profile.major_customers.USA.length} Major Customers</p>
              </div>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">European Market</h3>
                <p className="text-gray-600">{profile.major_customers.Europe.length} Major Customers</p>
              </div>
            </div>
            <div className="text-center space-y-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Middle East</h3>
                <p className="text-gray-600">{profile.major_customers["Saudi Arabia"].length} Major Customers</p>
              </div>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12">Our Valued Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
              {[...profile.major_customers.USA.slice(0, 4), ...profile.major_customers.Europe.slice(0, 2)].map((customer, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
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
      <section className="py-20 lg:py-32 bg-green-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Sustainability Commitment</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the way in sustainable garment manufacturing with globally recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Eco Practices</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Leaf className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Sustainable material sourcing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Recycle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Waste reduction and recycling programs</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Wind className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Energy-efficient manufacturing processes</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Droplets className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Water conservation and treatment systems</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Certifications</h3>
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
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
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Partner with Us for a Sustainable Future</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
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
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in-up animation-delay-200">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card animate-fade-in-up animation-delay-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {profile.vision_mission.vision}
                </p>
              </div>
            </div>
            <div className="card animate-fade-in-up animation-delay-400">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {profile.vision_mission.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Certifications</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest standards of quality and compliance with internationally recognized certifications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="card text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{cert}</h3>
                    <p className="text-gray-600 text-sm">Industry Standard</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Preview Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Range</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality garments for every market segment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {profile.product_range.slice(0, 6).map((product, index) => (
              <div key={index} className="card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-blue-100 rounded-lg p-4 h-48 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Package className="h-16 w-16 text-blue-600" />
                  </div>
                  <div className="p-6 lg:p-8 space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{product}</h3>
                    <p className="text-gray-600 leading-relaxed">Premium Quality Manufacturing</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-gray-500">Available Now</span>
                      <Link
                        href="/products"
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        View Products →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/products"
              className="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in-up">
              Ready to Partner with Al Hadi Exports?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Let's discuss your garment manufacturing needs and create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="btn-white inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="btn-outline-white inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
