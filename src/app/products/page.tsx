import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import productsData from '@/data/products.json';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality garments manufactured with precision and care
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productsData.categories.map((category) => (
              <div key={category.id}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Materials:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.materials.map((material, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Sizes:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, index) => (
                              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full">
                          Inquire About This Product
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fabrics</h2>
            <p className="text-lg text-gray-600">Premium quality fabrics for superior comfort and durability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.fabrics.map((fabric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{fabric.name}</h3>
                  <p className="text-gray-600 mb-4">{fabric.description}</p>
                  <div className="space-y-2">
                    {fabric.properties.map((property, propIndex) => (
                      <div key={propIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                        {property}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Standards</h2>
            <p className="text-lg text-gray-600">Committed to the highest quality standards in the industry</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productsData.quality_standards.map((standard, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{standard}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for Custom Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can customize our products to meet your specific requirements. Contact us to discuss your needs.
          </p>
          <Button className="bg-white text-blue-900 hover:bg-gray-100">
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}