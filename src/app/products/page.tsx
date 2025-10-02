'use client';

import React, { useState, useMemo } from 'react';
import ProductGrid from '@/components/ui/ProductGrid';
// @ts-ignore
import productsData from '../../../data/products.json';

// Enhanced product data with additional fields for filtering
const enhancedProducts = productsData.categories.flatMap((category: any) => 
  category.products.map((product: any) => ({
    ...product,
    category: category.name,
    ageGroup: determineAgeGroup(product.name, product.sizes),
    fabric: product.materials[0] || 'Cotton',
    certification: getCertifications(product),
    image: getProductImage(product.name),
    price: generatePrice(product.name, product.materials)
  }))
);

// Helper functions
function determineAgeGroup(name: string, sizes: string[]): string {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('kids') || nameLower.includes('toddler') || nameLower.includes('infant')) {
    return 'Kids';
  }
  if (sizes.some(size => size.includes('M') || size.includes('Y'))) {
    return 'Kids';
  }
  if (sizes.some(size => size.includes('XXL') || size.includes('XL'))) {
    return 'Adult';
  }
  return 'All Ages';
}

function getCertifications(product: any): string[] {
  const certs = [];
  if (product.materials.some((m: string) => m.toLowerCase().includes('organic'))) {
    certs.push('GOTS Organic');
  }
  if (product.features.some((f: string) => f.toLowerCase().includes('safe'))) {
    certs.push('OEKO-TEX');
  }
  if (product.name.toLowerCase().includes('kids')) {
    certs.push('CPSIA');
  }
  return certs.length > 0 ? certs : ['ISO 9001'];
}

function getProductImage(name: string): string {
  // Placeholder image generation based on product name
  const images = {
    'fleece': '/images/fleece-placeholder.svg',
    'hooded': '/images/hoodie-placeholder.svg',
    'sweatshirt': '/images/sweatshirt-placeholder.svg',
    'nightwear': '/images/nightwear-placeholder.svg',
    'jog': '/images/activewear-placeholder.svg',
    'knitted': '/images/knitwear-placeholder.svg',
    'polo': '/images/polo-placeholder.svg',
    'kids': '/images/kids-placeholder.svg',
    'toddler': '/images/infant-placeholder.svg',
    'boxer': '/images/underwear-placeholder.svg'
  };
  
  const nameLower = name.toLowerCase();
  for (const [key, image] of Object.entries(images)) {
    if (nameLower.includes(key)) {
      return image;
    }
  }
  return '/images/default-product.svg';
}

function generatePrice(name: string, materials: string[]): number {
  let basePrice = 15;
  
  if (name.toLowerCase().includes('fleece')) basePrice += 5;
  if (name.toLowerCase().includes('kids')) basePrice -= 3;
  if (name.toLowerCase().includes('organic')) basePrice += 8;
  if (materials.some(m => m.toLowerCase().includes('bamboo'))) basePrice += 10;
  if (materials.some(m => m.toLowerCase().includes('polyester'))) basePrice -= 2;
  
  return Math.round(basePrice + Math.random() * 10);
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Premium Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality garments manufactured with precision and care. 
              From cozy fleece to stylish polos, we have something for every market segment.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid with Advanced Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={enhancedProducts} />
        </div>
      </section>

      {/* Additional Information Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Al Hadi Exports?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality Materials</h3>
                    <p className="text-gray-600">We use only the finest fabrics and materials sourced from trusted suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Certifications</h3>
                    <p className="text-gray-600">Our products meet international quality and safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Manufacturing</h3>
                    <p className="text-gray-600">We can customize any product to meet your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Product Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Global Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our sales team to discuss your requirements, get custom quotes, and start your manufacturing journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Custom Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
              Schedule Factory Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}