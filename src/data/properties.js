
export const categories = [
  {
    slug: 'selected',
    title: 'Selected Properties',
    description: 'A curated selection of properties worth special attention.',
  },
  {
    slug: 'villas-houses',
    title: 'Villas & Houses',
    description: 'Private villas, houses and residences across Crete.',
  },
  {
    slug: 'apartments',
    title: 'Apartments',
    description: 'Apartments and residences for living or holidays.',
  },
  {
    slug: 'commercial',
    title: 'Commercial Properties',
    description: 'Commercial spaces and properties for business.',
  },
  {
    slug: 'land',
    title: 'Land',
    description: 'Land plots and opportunities to build in Crete.',
  },
  {
    slug: 'investment',
    title: 'Investment Properties',
    description: 'Properties with potential for investment.',
  },
];

export const properties = [
  {
    id: '101',
    title: 'Contemporary Villa with Sea Views',
    location: 'Agios Nikolaos, Crete',
    price: 680000,
    type: 'Villa',
    area: 210,
    bedrooms: 4,
    bathrooms: 3,
    categorySlugs: ['villas-houses', 'selected', 'investment'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    description:
      'A contemporary villa with generous living spaces, outdoor areas and beautiful views of the Mediterranean. An example property for the website preview.',
    features: ['Sea view', 'Private pool', 'Terrace', 'Parking'],
  },
  {
    id: '102',
    title: 'Bright Apartment near the Coast',
    location: 'Heraklion, Crete',
    price: 185000,
    type: 'Apartment',
    area: 82,
    bedrooms: 2,
    bathrooms: 1,
    categorySlugs: ['apartments', 'selected'],
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    description:
      'A bright apartment with a practical layout, a welcoming living area and convenient access to local amenities.',
    features: ['Balcony', 'Natural light', 'Near amenities'],
  },
  {
    id: '103',
    title: 'Traditional House in a Quiet Village',
    location: 'Rethymno Region, Crete',
    price: 245000,
    type: 'House',
    area: 135,
    bedrooms: 3,
    bathrooms: 2,
    categorySlugs: ['villas-houses', 'investment'],
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
    description:
      'A traditional-style home in a peaceful setting, suitable as a permanent residence or a holiday property.',
    features: ['Garden', 'Outdoor dining area', 'Quiet location'],
  },
  {
    id: '104',
    title: 'Commercial Space in a Central Location',
    location: 'Heraklion, Crete',
    price: 320000,
    type: 'Commercial',
    area: 160,
    bedrooms: null,
    bathrooms: 2,
    categorySlugs: ['commercial', 'investment'],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    description:
      'A flexible commercial space suitable for a range of business uses, subject to local planning and property conditions.',
    features: ['Central location', 'Flexible layout'],
  },
  {
    id: '105',
    title: 'Land with Mountain Views',
    location: 'Central Crete',
    price: 145000,
    type: 'Land',
    area: 2400,
    bedrooms: null,
    bathrooms: null,
    categorySlugs: ['land', 'investment'],
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    description:
      'A land plot in a scenic setting. Building permissions, access and utility connections must be independently verified.',
    features: ['Mountain views', 'Open surroundings'],
  },
  {
    id: '106',
    title: 'Modern Family Residence',
    location: 'Heraklion Region, Crete',
    price: 410000,
    type: 'House',
    area: 175,
    bedrooms: 3,
    bathrooms: 2,
    categorySlugs: ['villas-houses', 'selected'],
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    description:
      'A modern family residence with comfortable indoor spaces and room to enjoy the Cretan climate outdoors.',
    features: ['Garden', 'Terrace', 'Parking'],
  },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
}
