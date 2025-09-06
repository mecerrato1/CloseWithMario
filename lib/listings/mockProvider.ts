import { ListingsProvider, SearchParams, Listing } from "./provider";

const MOCK: Listing[] = [
  { id: "1", address: "123 Miami Ave, Miami, FL", price: 650000, propertyType: "Condo", beds: 2, baths: 2, remarks: "Bay views." },
  { id: "2", address: "45 Hollywood Blvd, Hollywood, FL", price: 520000, propertyType: "SFH", beds: 3, baths: 2, remarks: "Great yard." }
];

export const mockProvider: ListingsProvider = {
  async search(params: SearchParams) {
    return MOCK.filter(x => {
      if (params.county && !x.address.toLowerCase().includes(params.county.toLowerCase())) return false;
      if (params.minPrice && x.price < params.minPrice) return false;
      if (params.maxPrice && x.price > params.maxPrice) return false;
      if (params.propertyType && params.propertyType !== "" && x.propertyType !== params.propertyType) return false;
      return true;
    });
  }
};
