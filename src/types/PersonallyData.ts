export interface PersonalyItem {
  key: string;
  label: string;
  icon: string;
}

export interface AddressItem {
  city: string;
  postcode: string;
  street: string;
  icon: string;
}

export interface PersonalyData {
  personaly: PersonalyItem[];
  address: AddressItem[];
}
