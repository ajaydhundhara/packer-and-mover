// Original user-supplied photos. Crops happen in CSS; lightboxes show the full files.
// The office scene is the only remaining stock placeholder.
export const photos = {
  home: {
    src: '/images/projects/protected-furniture.jpg',
    alt: 'Furniture panels protected with cardboard and stretch film, ready for moving',
    position: '50% 48%',
  },
  truck: {
    src: '/images/projects/loaded-moving-truck.jpg',
    alt: 'A red goods truck loaded with wrapped furniture and cartons',
    position: '50% 58%',
  },
  pallet: {
    src: '/images/projects/pallet-packed-goods.jpg',
    alt: 'A wrapped shipment secured on a wooden pallet',
    position: '50% 25%',
  },
  office: {
    src: '/images/office.jpg',
    alt: 'Illustrative stock photograph of an office workspace',
    position: '50% 50%',
    sample: true,
  },
  warehouse: {
    src: '/images/projects/furniture-packing-detail.jpg',
    alt: 'Stacked furniture pieces protected with cardboard, wrapping, and tape',
    position: '35% 48%',
  },
  moving: {
    src: '/images/projects/wrapped-furniture-stack.jpg',
    alt: 'Large furniture pieces individually wrapped and stacked ready for relocation',
    position: '50% 43%',
  },
  equipment: {
    src: '/images/projects/wrapped-commercial-equipment.jpg',
    alt: 'Commercial equipment protected with blue packing material and stretch film',
    position: '50% 53%',
  },
  cartons: {
    src: '/images/projects/cartons-and-appliances.jpg',
    alt: 'Packed household cartons beside a protected appliance, ready for pickup',
    position: '50% 70%',
  },
  car: {
    src: '/images/projects/car-in-transporter.jpg',
    alt: 'A car positioned inside a vehicle transporter with wheel restraints visible',
    position: '50% 58%',
  },
  loading: {
    src: '/images/projects/household-goods-loading.jpg',
    alt: 'Furniture, boxes, and household bags loaded into a covered moving vehicle',
    position: '50% 61%',
  },
  interior: {
    src: '/images/projects/packed-truck-interior.jpg',
    alt: 'Cartons and wrapped household items inside a goods vehicle',
    position: '50% 64%',
  },
  road: {
    src: '/images/projects/road-transport-vehicle.jpg',
    alt: 'A white commercial transport vehicle parked beside a road',
    position: '50% 60%',
  },
};

export const galleryPhotos = [
  { img: 'truck', title: 'Packed and loaded for the journey', tag: 'GOODS TRANSPORT' },
  { img: 'car', title: 'A closer look at car transport', tag: 'VEHICLE TRANSPORT' },
  { img: 'home', title: 'Furniture, protected for the journey', tag: 'FURNITURE PROTECTION' },
  { img: 'equipment', title: 'Commercial equipment, carefully wrapped', tag: 'COMMERCIAL RELOCATION' },
  { img: 'loading', title: 'Household goods, loaded together', tag: 'MOVING DAY' },
  { img: 'interior', title: 'Inside a household shipment', tag: 'LOADED INTERIOR' },
  { img: 'pallet', title: 'Packed goods, ready for transport', tag: 'PALLET PACKING' },
  { img: 'warehouse', title: 'Care in every layer', tag: 'PACKING DETAILS' },
  { img: 'moving', title: 'Bulky pieces, individually protected', tag: 'HOME RELOCATION' },
  { img: 'cartons', title: 'Household essentials, ready to go', tag: 'CARTONS & APPLIANCES' },
  { img: 'road', title: 'A view from the road', tag: 'TRANSPORT VEHICLE' },
];

export const heroPhotos = ['truck', 'home', 'car', 'equipment'].map(
  key => galleryPhotos.find(photo => photo.img === key),
);
