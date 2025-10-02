import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProducts, getProductSpecs, getProfileData } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} - Al Hadi Exports`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      'garments',
      'textile exports',
      'Pakistan garments',
      ...product.materials,
      ...(product.certifications || []),
    ].join(', '),
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images || [product.image || '/images/default-product.svg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: product.images || [product.image || '/images/default-product.jpg'],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const specs = getProductSpecs(product);
  const profile = getProfileData();

  return <ProductDetailClient product={product} specs={specs} profile={profile} />;
}