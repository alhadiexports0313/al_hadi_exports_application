export interface VisionMission {
  vision: string;
  mission: string;
}

export interface MajorCustomers {
  USA: string[];
  Europe: string[];
  'Saudi Arabia': string[];
}

export interface StitchingFacility {
  'Flat Lock': number;
  'Single Needle': number;
  'Over Lock': number;
  'Two Needle': number;
  Feedo: number;
  'Bar Tack': number;
  'Button Hole': number;
  'Button Attachment': number;
  Eyelet: number;
  Consie: number;
  Press: number;
  Boiler: number;
  'Cutting Machines': number;
}

export interface EmbroideryDyeingFacility {
  embroidery: string;
  dyeing_unit: string[];
}

export interface ProfileData {
  company_name: string;
  headquarters: string;
  description: string;
  vision_mission: VisionMission;
  major_customers: MajorCustomers;
  product_range: string[];
  product_catalogue: string;
  certifications: string[];
  strengths: string[];
  stitching_facility: StitchingFacility;
  embroidery_dyeing_facility: EmbroideryDyeingFacility;
  conclusion: string;
}