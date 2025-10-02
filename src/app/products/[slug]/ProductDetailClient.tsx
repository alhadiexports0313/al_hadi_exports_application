'use client';

import { useState } from 'react';
import { Product, ProfileData } from '@/types/product';
import QuoteRequestForm from '@/components/ui/QuoteRequestForm';
import Image from 'next/image';

interface ProductDetailClientProps {
  product: Product;
  profile: ProfileData;
}

export default function ProductDetailClient({ product, profile }: ProductDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showShareNotification, setShowShareNotification] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 3000);
    }
  };

  const handleDownloadSpecs = () => {
    const specs = {
      name: product.name,
      category: product.category,
      materials: product.materials,
      sizes: product.sizes,
      features: product.features,
      stitching_capacity: profile.stitching_facility,
      dyeing_capacity: profile.embroidery_dyeing_facility,
      certifications: profile.certifications,
      quality_standards: product.quality_standards || []
    };
    
    const dataStr = JSON.stringify(specs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.slug}-specs.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showShareNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Link copied to clipboard!
        </div>
      )}

      {showQuoteForm && (
        <QuoteRequestForm 
          product={product}
          isOpen={showQuoteForm}
          onClose={() => setShowQuoteForm(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-full">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 capitalize">{product.category}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {profile.certifications && profile.certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.certifications.map((cert, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Quote
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Share
              </button>
              <button
                onClick={handleDownloadSpecs}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Download Specs
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Production Capacities</h3>
              <div className="space-y-2">
                <div className="py-2 border-b border-gray-200">
                  <span className="text-gray-600 block mb-2">Stitching Facility</span>
                  <div className="text-sm space-y-1">
                    {Object.entries(profile.stitching_facility as Record<string, number>).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span>{key}:</span>
                        <span className="font-medium">{value} machines</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="text-gray-600 block mb-2">Embroidery & Dyeing</span>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Embroidery:</span>
                      <span className="font-medium">{(profile.embroidery_dyeing_facility as any).embroidery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dyeing Unit:</span>
                      <span className="font-medium">{(profile.embroidery_dyeing_facility as any).dyeing_unit.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Standards</h3>
              <div className="space-y-2">
                {product.quality_standards?.map((standard, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">{standard}</span>
                    <span className="font-medium">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}