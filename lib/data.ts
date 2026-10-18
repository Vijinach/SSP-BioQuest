import { FlaskConical, Thermometer, Refrigerator, Droplet, Layers, Wind } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  description: string;
  features: string[];
};

export type ProductCategory = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: typeof FlaskConical;
  image: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: 'preservation',
    name: 'Preservation',
    shortName: 'Preservation',
    description: 'Advanced preservation solutions for biological samples and medical supplies.',
    icon: Refrigerator,
    image: '/images/Products/Product_1.jpg',
    products: [
      { id: 'p1', name: 'Ultra-Low Temperature Freezer', description: 'Reliable -86°C storage for sensitive biological samples.', features: ['Temperature range: -40°C to -86°C', 'Capacity: 580L', 'Touchscreen controller'] },
      { id: 'p2', name: 'Laboratory Refrigerator', description: 'Pharmacy-grade refrigeration for reagents and samples.', features: ['Temperature: 2°C to 8°C', 'Forced-air cooling', 'Auto-defrost'] },
      { id: 'p3', name: 'Biomedical Freezer', description: 'Specialized freezer for biomedical storage needs.', features: ['Temperature: -25°C to -40°C', 'Dual compressor', 'Alarm system'] },
    ],
  },
  {
    id: 'vaccine-storage',
    name: 'Vaccine Storage Solution',
    shortName: 'Vaccine Storage',
    description: 'WHO-certified vaccine storage and cold-chain solutions for immunization programs.',
    icon: Thermometer,
    image: '/images/Products/Product_2.png',
    products: [
      { id: 'vs1', name: 'Vaccine Refrigerator', description: 'WHO PQS certified refrigerator for vaccine storage.', features: ['2°C to 8°C', 'WHO PQS certified', 'Solar compatible'] },
      { id: 'vs2', name: 'Portable Vaccine Carrier', description: 'Cold-chain transport for vaccines and biologics.', features: ['Maintains 2-8°C for 72h', 'Lightweight', 'WHO PQS certified'] },
      { id: 'vs3', name: 'Ice-Lined Refrigerator', description: 'Robust storage with ice-lined walls for power outages.', features: ['Holds temp 72h without power', 'Large capacity', 'Durable build'] },
    ],
  },
  {
    id: 'laboratory-equipment',
    name: 'Laboratory Equipment',
    shortName: 'Lab Equipment',
    description: 'Essential instruments for daily laboratory operations and analytical procedures.',
    icon: FlaskConical,
    image: '/images/Products/Product_3.png',
    products: [
      { id: 'le1', name: 'Analytical Balance', description: 'High-precision weighing for analytical applications.', features: ['0.1mg readability', '220g capacity', 'Internal calibration'] },
      { id: 'le2', name: 'Hot Air Oven', description: 'Sterilization and drying via forced convection.', features: ['Up to 250°C', 'Forced air circulation', 'Stainless steel chamber'] },
      { id: 'le3', name: 'Fume Hood', description: 'Ventilated enclosure for safe chemical handling.', features: ['6 ft width', '500 lux sash', 'Corrosion-resistant liner'] },
    ],
  },
  {
    id: 'blood-bank',
    name: 'Blood Bank Solution',
    shortName: 'Blood Bank',
    description: 'Specialized equipment for blood banking, storage, and transfusion services.',
    icon: Droplet,
    image: '/images/Products/Product_4.png',
    products: [
      { id: 'bb1', name: 'Blood Bank Refrigerator', description: 'Specialized storage for blood and blood products.', features: ['4°C ± 1°C', 'Dual temperature sensors', 'Alarm system'] },
      { id: 'bb2', name: 'Platelet Incubator', description: 'Agitating incubator for platelet concentrate storage.', features: ['20-24°C', 'Horizontal agitation', 'Capacity: 24 bags'] },
      { id: 'bb3', name: 'Blood Collection Tubes', description: 'Vacuum blood tubes with various additives.', features: ['EDTA, SST, citrate', 'Color-coded caps', 'Sterile'] },
    ],
  },
  {
    id: 'cold-chain',
    name: 'Cold Chain Logistic',
    shortName: 'Cold Chain',
    description: 'End-to-end cold chain logistics solutions for temperature-sensitive shipments.',
    icon: Layers,
    image: '/images/Products/Product_5.png',
    products: [
      { id: 'cc1', name: 'Transport Cooler Box', description: 'Insulated boxes for temperature-sensitive sample logistics.', features: ['18L & 25L variants', 'Polyurethane insulation', 'Reusable'] },
      { id: 'cc2', name: 'Temperature Data Logger', description: 'Monitor and log temperatures during storage and transport.', features: ['USB data export', '10,000 readings', 'Calibrated sensor'] },
      { id: 'cc3', name: 'Cold Room', description: 'Walk-in cold room for large-scale cold storage.', features: ['Customizable size', 'PUF insulated panels', 'Digital controller'] },
    ],
  },
  {
    id: 'cryo-preservation',
    name: 'Cryo Preservation',
    shortName: 'Cryo',
    description: 'Cryogenic storage and preservation systems for long-term biological sample storage.',
    icon: Wind,
    image: '/images/Products/Product_6.png',
    products: [
      { id: 'cp1', name: 'Cryogenic Storage Tank', description: 'Liquid nitrogen storage for long-term sample preservation.', features: ['-196°C', 'Capacity: 3500 vials', 'Low evaporation rate'] },
      { id: 'cp2', name: 'Cryo Vials', description: 'Sterile vials for cryogenic sample storage.', features: ['1.8mL & 2mL', 'External thread', 'Autoclavable'] },
      { id: 'cp3', name: 'Liquid Nitrogen Dewar', description: 'Portable dewar for LN2 transport and storage.', features: ['10L capacity', 'Vacuum insulated', 'Safety valve'] },
    ],
  },
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];
