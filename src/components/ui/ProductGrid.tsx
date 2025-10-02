'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Search, Filter, Download, Smile } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

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

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedFabric, setSelectedFabric] = useState('all');
  const [selectedCertification, setSelectedCertification] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [makeBuyerSmile, setMakeBuyerSmile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract unique values for filters
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return Array.from(cats).sort();
  }, [products]);

  const ageGroups = useMemo(() => {
    const groups = new Set(products.map(p => p.ageGroup).filter(Boolean));
    return Array.from(groups).sort();
  }, [products]);

  const fabrics = useMemo(() => {
    const fabricsSet = new Set<string>();
    products.forEach(p => {
      p.materials.forEach(material => fabricsSet.add(material));
    });
    return Array.from(fabricsSet).sort();
  }, [products]);

  const certifications = useMemo(() => {
    const certs = new Set<string>();
    products.forEach(p => {
      if (p.certification) {
        p.certification.forEach(cert => certs.add(cert));
      }
    });
    return Array.from(certs).sort();
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.materials.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesAgeGroup = selectedAgeGroup === 'all' || product.ageGroup === selectedAgeGroup;
      const matchesFabric = selectedFabric === 'all' || product.materials.includes(selectedFabric);
      const matchesCertification = selectedCertification === 'all' || 
                                   (product.certification && product.certification.includes(selectedCertification));
      
      // "Make My Buyer Smile" filter - adds products that are particularly appealing
      const matchesSmileFilter = !makeBuyerSmile || (
        product.name.toLowerCase().includes('kids') ||
        product.name.toLowerCase().includes('infant') ||
        product.name.toLowerCase().includes('toddler') ||
        product.description.toLowerCase().includes('soft') ||
        product.description.toLowerCase().includes('comfortable') ||
        product.materials.some(m => m.toLowerCase().includes('organic')) ||
        product.materials.some(m => m.toLowerCase().includes('bamboo'))
      );

      return matchesSearch && matchesCategory && matchesAgeGroup && matchesFabric && matchesCertification && matchesSmileFilter;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, selectedAgeGroup, selectedFabric, selectedCertification, sortBy, makeBuyerSmile]);

  const handleProductSelect = (product: Product) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(product.id)) {
      newSelected.delete(product.id);
    } else {
      newSelected.add(product.id);
    }
    setSelectedProducts(newSelected);
  };

  const handleDownloadPDF = (product: Product) => {
    // Simulate PDF download
    const pdfContent = `
      Product Specification Sheet
      ==========================
      Product: ${product.name}
      Category: ${product.category}
      Description: ${product.description}
      Materials: ${product.materials.join(', ')}
      Sizes: ${product.sizes.join(', ')}
      Features: ${product.features.join(', ')}
      ${product.certification ? `Certifications: ${product.certification.join(', ')}` : ''}
    `;
    
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, '_')}_spec_sheet.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    const selectedProductsList = products.filter(p => selectedProducts.has(p.id));
    
    if (selectedProductsList.length === 0) {
      alert('Please select at least one product to export.');
      return;
    }

    const csvContent = [
      ['Product Name', 'Category', 'Description', 'Materials', 'Sizes', 'Features', 'Certifications'].join(','),
      ...selectedProductsList.map(product => [
        `"${product.name}"`,
        `"${product.category}"`,
        `"${product.description}"`,
        `"${product.materials.join('; ')}"`,
        `"${product.sizes.join('; ')}"`,
        `"${product.features.join('; ')}"`,
        `"${product.certification ? product.certification.join('; ') : ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'al_hadi_products_selection.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products by name, description, or materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>

            <Select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
            >
              <option value="all">All Age Groups</option>
              {ageGroups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </Select>

            <Select
              value={selectedFabric}
              onChange={(e) => setSelectedFabric(e.target.value)}
            >
              <option value="all">All Fabrics</option>
              {fabrics.map(fabric => (
                <option key={fabric} value={fabric}>{fabric}</option>
              ))}
            </Select>

            <Select
              value={selectedCertification}
              onChange={(e) => setSelectedCertification(e.target.value)}
            >
              <option value="all">All Certifications</option>
              {certifications.map(cert => (
                <option key={cert} value={cert}>{cert}</option>
              ))}
            </Select>

            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="category">Sort by Category</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Select>

            {/* "Make My Buyer Smile" Filter */}
            <Button
              variant={makeBuyerSmile ? "default" : "outline"}
              onClick={() => setMakeBuyerSmile(!makeBuyerSmile)}
              className="flex items-center gap-2"
            >
              <Smile className="h-4 w-4" />
              Make Buyer Smile
            </Button>
          </div>
        )}

        {/* Export Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t">
          <div className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedProducts.size > 0 && (
              <span className="ml-2 font-medium text-blue-600">
                ({selectedProducts.size} selected)
              </span>
            )}
          </div>
          <Button
            onClick={exportToCSV}
            disabled={selectedProducts.size === 0}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export Selection to CSV
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            isSelected={selectedProducts.has(product.id)}
            onDownloadPDF={handleDownloadPDF}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          {makeBuyerSmile && (
            <p className="text-blue-600 mt-2">
              💡 Try turning off "Make My Buyer Smile" to see more products!
            </p>
          )}
        </div>
      )}
    </div>
  );
}