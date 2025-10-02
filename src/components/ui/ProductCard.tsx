'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { Download, FileText, Heart, MessageCircle } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  materials: string[];
  sizes: string[];
  features: string[];
  category: string;
  ageGroup?: string;
  fabric?: string;
  certification?: string[];
  image?: string;
  price?: number;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  isSelected: boolean;
  onDownloadPDF: (product: Product) => void;
  onInquire?: (product: Product) => void;
}

export default function ProductCard({ product, onSelect, isSelected, onDownloadPDF, onInquire }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getProductImage = (product: Product) => {
    if (product.image) return product.image;
    
    // Map products to placeholder images based on category or name
    const category = product.category.toLowerCase();
    const name = product.name.toLowerCase();
    
    if (name.includes('fleece') || category.includes('fleece')) return '/images/fleece-placeholder.svg';
    if (name.includes('hoodie') || category.includes('hoodie')) return '/images/hoodie-placeholder.svg';
    if (name.includes('sweatshirt') || category.includes('sweatshirt')) return '/images/sweatshirt-placeholder.svg';
    if (name.includes('nightwear') || name.includes('pajama') || category.includes('night')) return '/images/nightwear-placeholder.svg';
    if (name.includes('activewear') || category.includes('active')) return '/images/activewear-placeholder.svg';
    if (name.includes('knit') || category.includes('knit')) return '/images/knitwear-placeholder.svg';
    if (name.includes('polo') || category.includes('polo')) return '/images/polo-placeholder.svg';
    if (name.includes('kids') || name.includes('children') || category.includes('kids')) return '/images/kids-placeholder.svg';
    if (name.includes('infant') || name.includes('baby') || category.includes('infant')) return '/images/infant-placeholder.svg';
    if (name.includes('underwear') || name.includes('boxer') || name.includes('brief') || category.includes('underwear')) return '/images/underwear-placeholder.svg';
    
    return '/images/default-product.jpg';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownloadPDF(product);
  };

  const handleInquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    onInquire?.(product);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
        isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
      }`}
      onClick={() => onSelect(product)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-gray-100">
        {!imageError ? (
          <Image
            src={getProductImage(product)}
            alt={product.name}
            fill
            className="object-cover"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">👕</span>
              </div>
              <p className="text-gray-500 text-sm font-medium">{product.name}</p>
            </div>
          </div>
        )}
        
        {/* Like Button */}
        <button
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          {product.category}
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Selected
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          {product.price && (
            <span className="text-lg font-bold text-blue-600">${product.price}</span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.ageGroup && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {product.ageGroup}
            </span>
          )}
          {product.fabric && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
              {product.fabric}
            </span>
          )}
          {product.certification?.slice(0, 2).map((cert, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
              {cert}
            </span>
          ))}
        </div>

        {/* Materials */}
        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-1">Materials:</div>
          <div className="flex flex-wrap gap-1">
            {product.materials.slice(0, 3).map((material, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {material}
              </span>
            ))}
            {product.materials.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                +{product.materials.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">Sizes:</div>
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 5).map((size, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium border">
                {size}
              </span>
            ))}
            {product.sizes.length > 5 && (
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                +{product.sizes.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="space-y-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleDownloadPDF}
          >
            <FileText className="h-4 w-4 mr-1" />
            Spec PDF
          </Button>
          {onInquire && (
            <Button size="sm" className="flex-1" onClick={handleInquire}>
              <MessageCircle className="h-4 w-4 mr-1" />
              Inquire
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}