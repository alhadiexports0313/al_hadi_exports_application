import jsPDF from 'jspdf';
import { ProfileData } from '@/types/profile';

export async function generateCompanyProfilePDF(profile: ProfileData): Promise<Buffer> {
  const doc = new jsPDF();
  
  // Title page
  doc.setFontSize(24);
  doc.setTextColor(30, 58, 138);
  doc.text('AL HADI EXPORTS', 105, 40, { align: 'center' });
  
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Company Profile', 105, 55, { align: 'center' });
  
  // Company Overview
  doc.setFontSize(14);
  doc.text('Company Overview', 20, 80);
  
  doc.setFontSize(12);
  const overviewLines = doc.splitTextToSize(profile.company.overview, 170);
  doc.text(overviewLines, 20, 90);
  
  // Contact Information
  let currentY = 120 + (overviewLines.length * 5);
  
  doc.setFontSize(14);
  doc.text('Contact Information', 20, currentY);
  
  doc.setFontSize(12);
  doc.text(`Phone: ${profile.company.contact.phone}`, 20, currentY + 10);
  doc.text(`Email: ${profile.company.contact.email}`, 20, currentY + 20);
  doc.text(`Address: ${profile.company.address}`, 20, currentY + 30);
  
  // Generate PDF as buffer
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  return pdfBuffer;
}