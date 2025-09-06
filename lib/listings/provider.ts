export type Listing = {
  id: string;
  address: string;
  price: number;
  propertyType: string; // SFH | Condo | Townhouse
  beds?: number;
  baths?: number;
  remarks?: string;
  photos?: string[];
  listingAgent?: string;
};

export type SearchParams = {
  county?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
};

export interface ListingsProvider {
  search(params: SearchParams): Promise<Listing[]>;
}
