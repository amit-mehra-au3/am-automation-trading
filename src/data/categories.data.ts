import type { ProductCategory } from '../types';

export const CATEGORIES_DATA: ProductCategory[] = [
  {
    id: 'plc-controllers',
    name: 'PLC & Controllers',
    slug: 'plc-controllers',
    shortDesc: 'Compact & modular programmable logic controllers for high-speed machine control and process automation.',
    imageUrl: '/images/plc_controllers.jpg',
    productCount: 42,
    featuredProducts: ['plc-s71200', 'plc-fx5u', 'plc-cp1e']
  },
  {
    id: 'hmi-operator-panels',
    name: 'HMI & Operator Panels',
    slug: 'hmi-operator-panels',
    shortDesc: 'High-resolution industrial touch screens and keypad panels for real-time visualization & SCADA.',
    imageUrl: '/images/hmi_panel.jpg',
    productCount: 28,
    featuredProducts: ['hmi-ktp700', 'hmi-dop107']
  },
  {
    id: 'ac-drives-vfd',
    name: 'AC Drives / VFD',
    slug: 'ac-drives-vfd',
    shortDesc: 'Heavy-duty & micro variable frequency drives for motor speed control, torque control, & energy savings.',
    imageUrl: '/images/ac_drives.jpg',
    productCount: 35,
    featuredProducts: ['vfd-g120c', 'vfd-ms300']
  },
  {
    id: 'servo-drives-motors',
    name: 'Servo Drives & Motors',
    slug: 'servo-drives-motors',
    shortDesc: 'High-precision AC servo motors and digital amplifiers for exact motion control, positioning, & robotics.',
    imageUrl: '/images/servo_motors.jpg',
    productCount: 24,
    featuredProducts: ['servo-minas-a6', 'servo-mr-j4']
  },
  {
    id: 'industrial-sensors',
    name: 'Industrial Sensors',
    slug: 'industrial-sensors',
    shortDesc: 'Inductive proximity, photoelectric, ultrasonic, pressure sensors, and rotary encoders for plant detection.',
    imageUrl: '/images/industrial_sensors.jpg',
    productCount: 56,
    featuredProducts: ['sensor-e2b', 'sensor-e3z']
  },
  {
    id: 'contactors-relays',
    name: 'Contactors & Relays',
    slug: 'contactors-relays',
    shortDesc: 'Industrial magnetic contactors, thermal overload relays, timer relays, and solid-state switching units.',
    imageUrl: '/images/power_supplies.jpg',
    productCount: 48,
    featuredProducts: ['contactor-3rt20', 'relay-my4n']
  },
  {
    id: 'power-supplies',
    name: 'Power Supplies',
    slug: 'power-supplies',
    shortDesc: 'Stabilized 24V DC DIN-rail switch mode power supplies (SMPS) with high efficiency & short-circuit protection.',
    imageUrl: '/images/power_supplies.jpg',
    productCount: 19,
    featuredProducts: ['smps-hdr60', 'smps-sitop']
  },
  {
    id: 'industrial-switchgear',
    name: 'Industrial Switchgear',
    slug: 'industrial-switchgear',
    shortDesc: 'MCCB, MCB, MPCB motor protection circuit breakers and isolator switches for electrical panel safety.',
    imageUrl: '/images/power_supplies.jpg',
    productCount: 38
  },
  {
    id: 'control-panel-components',
    name: 'Control Panel Components',
    slug: 'control-panel-components',
    shortDesc: 'Terminal blocks, push buttons, indicator lamps, selector switches, wiring ducts, & DIN rails.',
    imageUrl: '/images/hero_automation.jpg',
    productCount: 65
  },
  {
    id: 'cnc-machine-automation',
    name: 'CNC & Machine Automation',
    slug: 'cnc-machine-automation',
    shortDesc: 'Multi-axis CNC controllers, pulse generators, handwheels, & interpolated motion control boards.',
    imageUrl: '/images/servo_motors.jpg',
    productCount: 15
  },
  {
    id: 'industrial-communication',
    name: 'Industrial Communication',
    slug: 'industrial-communication',
    shortDesc: 'Unmanaged & managed Industrial Ethernet switches, RS485/PROFINET gateways, & IoT remote access routers.',
    imageUrl: '/images/hmi_panel.jpg',
    productCount: 22
  },
  {
    id: 'automation-accessories',
    name: 'Automation Accessories',
    slug: 'automation-accessories',
    shortDesc: 'Shielded cables, heavy-duty connectors, brake resistors, line reactors, & signal converters.',
    imageUrl: '/images/ac_drives.jpg',
    productCount: 31
  }
];
