import productData from '../../data/products.json';
import profileData from '../../data/profile.json';
import { Product, ProductCategory, ProductData } from '../types/product';
import { ProfileData } from '../types/profile';

const data = productData as ProductData;
const profile = profileData as ProfileData;

export function getAllProducts(): Product[] {
  const products: Product[] = [];
  
  data.categories.forEach(category => {
    category.products.forEach(product => {
      products.push({
        ...product,
        category: category.name,
        categoryId: category.id,
        slug: product.id,
        images: getProductImages(product.id, category.id)
      });
    });
  });
  
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(product => product.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return getAllProducts().filter(product => product.categoryId === categoryId);
}

export function getProductCategories(): ProductCategory[] {
  return data.categories.map(category => ({
    ...category,
    products: category.products.map(product => ({
      ...product,
      category: category.name,
      categoryId: category.id,
      slug: product.id,
      images: getProductImages(product.id, category.id)
    }))
  }));
}

export function getProductImages(productId: string, categoryId: string): string[] {
  const basePath = '/images';
  
  // Map category IDs to their corresponding placeholder images
  const categoryPlaceholders: Record<string, string> = {
    'fleece': `${basePath}/fleece-placeholder.svg`,
    'nightwear': `${basePath}/nightwear-placeholder.svg`,
    'activewear': `${basePath}/activewear-placeholder.svg`,
    'knitwear': `${basePath}/knitwear-placeholder.svg`,
    'kids-wear': `${basePath}/kids-placeholder.svg`,
    'innerwear': `${basePath}/underwear-placeholder.svg`
  };
  
  // Get the appropriate placeholder image based on category
  const primaryImage = categoryPlaceholders[categoryId] || `${basePath}/default-product.svg`;
  const fallbackImage = `${basePath}/default-product.svg`;
  
  return [primaryImage, fallbackImage];
}

export function getRelatedProducts(currentProduct: Product, limit: number = 4): Product[] {
  const allProducts = getAllProducts();
  return allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.categoryId === currentProduct.categoryId || 
       product.materials.some(material => currentProduct.materials.includes(material)))
    )
    .slice(0, limit);
}

export function getProductSpecs(product: Product) {
  return {
    materials: product.materials,
    sizes: product.sizes,
    features: product.features,
    stitching_capacity: profile.stitching_facility,
    dyeing_capacity: profile.embroidery_dyeing_facility,
    certifications: profile.certifications,
    quality_standards: data.quality_standards
  };
}

export function getProfileData(): ProfileData {
  return profile;
}