
export interface Owner {
    name: string;
    cellphone: number;
  }
  

  export interface Visit {
    costumerId: Customer ; 
    propertyId: string;
    date: string;
    hour: string;
    comment: string;
  }

  export interface visitCreate {
    costumerId: string ; 
    propertyId: string;
    date: string;
    hour: string;
    comment: string;
  }

  export interface Stays {
    bedrooms: number;
    bathrooms: number;
    toiletrooms: number;
    kitchens: number;
    balcony: boolean;
  }

  export interface Features {
    gas?: boolean;
    armoredDoor?: boolean;
    parquet?: boolean;
    frontDoors?: boolean;
    diaphone?: boolean;
    air?: boolean;
  }

  export interface Office {
    _id: string,
    officeNumber: number;
    name: string;
    city: string;
    address: string;
    cellphone: number;
    isActive: boolean;
  }

  export interface Customer {
    _id: string,
    name: string;
    lastName: string;
    document: number;
    email: string;
    cellphone: number;
    city: string;
  }
  
  export interface Property {
    _id: string;
    reference: number;
    type?: string; // piso nuevo, piso de ocasión, villa, casa, local
    area: number; // en m^2
    address: string;
    offerMode: string;
    sellingPrice: number;
    rentalPrice: number;
    owner: Owner;
    office?: Office; // Assuming that ObjectId is a string
    visits: Visit[];
    zone?: string;
    urbanization?: string;
    parcelSize?: number;
    stays?: Stays;
    features?: Features;
  }