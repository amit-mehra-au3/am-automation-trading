import type { IndustrySector } from '../types';

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & General Engineering',
    slug: 'manufacturing',
    iconName: 'Factory',
    description: 'Component sourcing and control upgrades for discrete manufacturing, metal fabrication, assembly lines, and industrial machinery.',
    automationBenefits: {
      machineControl: 'Consistent machine cycle timing and automated sequence logic',
      productivity: 'Reduced manual handling with automatic part transfer & positioning',
      monitoring: 'Real-time fault reporting via HMI screen',
      reliability: 'Heavy-duty industrial switchgear protecting electrical cabinets',
      downtimeReduction: 'Fast part replacement using standardized DIN components',
      energyEfficiency: 'AC drive control on variable-load production machinery'
    },
    recommendedComponents: ['Modular PLC Systems', 'AC Drives / VFDs', 'Industrial Touch HMIs', 'Motor Switchgear', 'Proximity Sensors'],
    imageUrl: '/images/hero_automation.jpg'
  },
  {
    id: 'automotive',
    name: 'Automotive & Parts Manufacturing',
    slug: 'automotive',
    iconName: 'Car',
    description: 'High-precision motion control, robotic cell integration, and sensory feedback for automotive stamping, welding, and component machining.',
    automationBenefits: {
      machineControl: 'Sub-millimeter positioning accuracy with AC servo drives',
      productivity: 'Synchronized multi-axis robotic pick and place operation',
      monitoring: 'Quality pass/fail sensor logging on assembly lines',
      reliability: 'Industrial Ethernet PROFINET real-time bus connectivity',
      downtimeReduction: 'Quick plug-and-play servo encoder replacement',
      energyEfficiency: 'Regenerative braking energy utilization on high-speed axes'
    },
    recommendedComponents: ['Precision Servo Motors & Drives', 'Photoelectric Sensors', 'PROFINET Remote I/O', 'Safety Relays'],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'packaging',
    name: 'Packaging & Bottling Machinery',
    slug: 'packaging',
    iconName: 'Box',
    description: 'High-speed registration, rotary wrapping, liquid filling, capping, and pouch-making automation components for OEMs.',
    automationBenefits: {
      machineControl: 'Color mark detection sensors for exact bag cutting alignment',
      productivity: 'High pouch output speeds via electronic camming servo drives',
      monitoring: 'Recipe management for fast package size changeover on HMI',
      reliability: 'Vibration-resistant cage-clamp electrical connections',
      downtimeReduction: 'Self-diagnostic alarm screens pinpointing sensor misalignments',
      energyEfficiency: 'Energy-optimized VFD speed control on conveyor belts'
    },
    recommendedComponents: ['High-Speed Transistor Output PLC', 'Color Mark Registration Sensor', 'AC Servo Systems', 'Touch Screens'],
    imageUrl: '/images/hmi_panel.jpg'
  },
  {
    id: 'textile',
    name: 'Textile & Garment Machinery',
    slug: 'textile',
    iconName: 'Scissors',
    description: 'Reliable speed synchronization and tension regulation for spinning, weaving, stenter, dyeing, and printing machinery.',
    automationBenefits: {
      machineControl: 'PID tension feedback control preventing yarn breakage',
      productivity: 'Synchronized multi-motor VFD drive groups',
      monitoring: 'Yarn fault count and speed display on operator console',
      reliability: 'Dust and lint-sealed IP-rated sensor enclosures',
      downtimeReduction: 'Quick drive parameter copy via keypad or memory card',
      energyEfficiency: 'Massive electricity savings on stenter fan and pump drives'
    },
    recommendedComponents: ['Vector Control AC Drives', 'Yarn Breakage Sensors', 'Temperature Controllers', '24V DC Power Units'],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'food-processing',
    name: 'Food Processing & Beverage',
    slug: 'food-processing',
    iconName: 'Utensils',
    description: 'Hygienic sensing, batch mixing controllers, oven temperature regulators, and conveyor drives for food processing plants.',
    automationBenefits: {
      machineControl: 'Multi-stage temperature PID control for baking and frying',
      productivity: 'Automated batching and weighing system integration',
      monitoring: 'HACCP process temperature and clean-in-place (CIP) logging',
      reliability: 'Stainless steel proximity and photoelectric sensors',
      downtimeReduction: 'Washdown-safe control enclosures and components',
      energyEfficiency: 'PID speed regulation on refrigeration and mixing pumps'
    },
    recommendedComponents: ['Stainless Steel Sensors', 'PID Temperature Modules', 'Washdown VFDs', 'IP66 Touch HMIs'],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'water-wastewater',
    name: 'Water & Wastewater Treatment',
    slug: 'water-wastewater',
    iconName: 'Droplet',
    description: 'Pump staging controllers, level sensors, pressure transmitters, and VFD flow regulators for WTP, STP, and pumping stations.',
    automationBenefits: {
      machineControl: 'Automatic multi-pump lead/lag alternation to balance wear',
      productivity: 'Unattended continuous 24/7 pumping operation',
      monitoring: 'Remote GSM/GPRS telemetry and tank level reporting',
      reliability: 'Surge protection and isolation transformers for outdoor panels',
      downtimeReduction: 'Dry-run protection preventing pump impeller damage',
      energyEfficiency: 'Up to 40% energy reduction using VFD pump speed control'
    },
    recommendedComponents: ['Water Dedicated VFDs', 'Submersible Level Sensors', 'Pressure Transmitters', 'Remote Access Routers'],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'material-handling',
    name: 'Material Handling & Logistics',
    slug: 'material-handling',
    iconName: 'Truck',
    description: 'Automated warehouse conveyors, palletizers, overhead cranes, and sorter control panels.',
    automationBenefits: {
      machineControl: 'Smooth crane travel and hoist acceleration without load swing',
      productivity: 'Automated package sorting at high belt speeds',
      monitoring: 'Pallet position tracking via photoelectric sensor arrays',
      reliability: 'Heavy-duty limit switches and brake motor controllers',
      downtimeReduction: 'Modular terminal blocks for fast field cable replacement',
      energyEfficiency: 'Braking resistor energy absorption on crane hoists'
    },
    recommendedComponents: ['Heavy-Duty VFDs', 'Crane Brake Resistors', 'Photoelectric Arrays', 'Limit Switches'],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'machine-building',
    name: 'Special Purpose Machine (SPM) Building',
    slug: 'machine-building',
    iconName: 'Cpu',
    description: 'Custom automation hardware kits for machine OEMs developing specialized drilling, tapping, welding, or assembly SPM rigs.',
    automationBenefits: {
      machineControl: 'Custom multi-axis sequence programming via ladder logic',
      productivity: 'Reduced cycle times compared to manual jigs',
      monitoring: 'Operator safety light curtain interlocking',
      reliability: 'Tested component compatibility across PLC, Servo & HMI',
      downtimeReduction: 'Structured wiring and clear panel labeling',
      energyEfficiency: 'High-efficiency 24V DC SMPS power units'
    },
    recommendedComponents: ['SPM Controller Bundles', 'Servo Drives', 'Safety Light Curtains', 'Operator Push Buttons'],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'process-industries',
    name: 'Chemical & Process Industries',
    slug: 'process-industries',
    iconName: 'FlaskConical',
    description: 'Hazardous area sensors, valve actuators, batch controllers, and explosion-proof panel components for process plants.',
    automationBenefits: {
      machineControl: 'Precise chemical dosing valve control via 4-20mA signals',
      productivity: 'Automated batch recipe control minimizing human error',
      monitoring: 'Intrinsic safety barrier signal isolation for hazardous zones',
      reliability: 'Robust corrosion-resistant sensor bodies',
      downtimeReduction: 'Self-monitoring smart transmitters with HART protocol',
      energyEfficiency: 'Variable speed agitator and mixer drive control'
    },
    recommendedComponents: ['4-20mA Analog Signal Isolators', 'Process Controllers', 'Intrinsically Safe Barriers', 'Managed Switches'],
    imageUrl: '/images/plc_controllers.jpg'
  }
];
