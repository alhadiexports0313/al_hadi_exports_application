import { NextRequest, NextResponse } from 'next/server';
import { generateCompanyProfilePDF } from '@/lib/pdf-generator';

export async function GET(request: NextRequest) {
  try {
    // Generate the PDF
    const pdfBlob = await generateCompanyProfilePDF();
    
    // Convert blob to buffer
    const arrayBuffer = await pdfBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Set response headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="AL-HADI-EXPORTS-Company-Profile.pdf"');
    headers.set('Content-Length', buffer.length.toString());
    
    return new NextResponse(buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}