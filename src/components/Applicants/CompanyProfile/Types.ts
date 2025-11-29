export interface Location {
  name: string; 
  logo: string; 
}
export interface Tech {
  name: string; 
  logo: string;  
}

export interface Images{
  src: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  locations: Location[]; 
  website: string;
  industry: string;
  description: string;
  founded: string;
  employees: string;
  linkedin: string;
  facebook?: string;
  twitter?: string;
  techStack: Tech[];
  images: Images[];
}

export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  level: string;
}
