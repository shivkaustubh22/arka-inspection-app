// Shared type definitions for Arka Inspection

export interface Inspection {
  id: string;
  vesselId: string;
  inspectorId: string;
  date: Date;
  status: 'draft' | 'in_progress' | 'completed';
}

export interface Vessel {
  id: string;
  name: string;
  type: string;
  registrationNumber: string;
}

export interface Inspector {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'inspector';
}
