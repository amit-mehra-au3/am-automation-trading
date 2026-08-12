import type { IndustrySector } from '../types';

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: 'manufacturing',
    name: 'General Manufacturing',
    slug: 'manufacturing',
    iconName: 'Factory',
    description: 'Precision machining, metal fabrication, component assembly, and heavy industrial production plants.',
    automationBenefits: {
      machineControl: 'Programmable logic controllers ensure repeatable mechanical sequences and synchronized motion across assembly stations.',
      productivity: 'Automated loading, indexing, and transfer mechanisms accelerate overall part cycle times.',
      monitoring: 'HMI dashboards present shift counts, active alarm statuses, and operational parameters for operators.',
      reliability: 'Solid-state industrial components withstand harsh vibration, dust, and continuous thermal duty.',
      downtimeReduction: 'Clear LED indicators and HMI fault logging enable maintenance technicians to diagnose sensor or drive faults quickly.',
      energyEfficiency: 'AC VFD drives regulate motor speed during idle cycles to avoid unnecessary power consumption.'
    },
    recommendedComponents: ['Modular PLC', 'Heavy Duty VFD', 'Proximity Sensors', 'Operator HMI'],
    imageUrl: '/images/hero_automation.jpg'
  },
  {
    id: 'automotive',
    name: 'Automotive & Ancillaries',
    slug: 'automotive',
    iconName: 'Car',
    description: 'Stamping, welding, auto component machining, surface treatment, and sub-assembly automation lines.',
    automationBenefits: {
      machineControl: 'High-speed servo drives deliver exact torque and positioning control for automated robotic transfer and pressing.',
      productivity: 'Continuous automated part handling reduces manual cycle wait times between welding stations.',
      monitoring: 'Centralized Ethernet communication streams line status to supervisory control rooms.',
      reliability: 'IP-rated sensors and rugged electrical switchgear maintain high operational uptime under heavy duty cycles.',
      downtimeReduction: 'Predictive diagnostic signals alert maintenance teams prior to mechanical component failure.',
      energyEfficiency: 'Regenerative braking modules capture deceleration energy back into panel bus systems.'
    },
    recommendedComponents: ['High Precision Servo Systems', 'PROFINET Ethernet Switch', 'Inductive Sensors', 'Multi-Axis PLC'],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'packaging',
    name: 'Packaging Machinery',
    slug: 'packaging',
    iconName: 'Package',
    description: 'Flow wrapping, pouch filling, carton sealing, labeling, strapping, and palletizing machinery OEMs.',
    automationBenefits: {
      machineControl: 'Synchronized multi-axis servo motion control enables registration mark detection and seamless film feed.',
      productivity: 'Quick HMI recipe selection enables operators to switch product package sizes with minimal downtime.',
      monitoring: 'Real-time pack count, speed (packs/min), and seal heater temperature tracking.',
      reliability: 'Precision fiber-optic photoelectric sensors accurately detect transparent films and foil materials.',
      downtimeReduction: 'Modular plug-and-play drives and pre-wired terminal blocks simplify field component replacement.',
      energyEfficiency: 'VFD speed regulation matches conveyor belt feed dynamically to machine intake rates.'
    },
    recommendedComponents: ['Color Mark Photoelectric Sensor', 'Compact Servo Motor', '7 Inch Touch Panel HMI', 'Temperature Controller'],
    imageUrl: '/images/hmi_panel.jpg'
  },
  {
    id: 'textile',
    name: 'Textile Machinery',
    slug: 'textile',
    iconName: 'Scissors',
    description: 'Spinning, weaving, dyeing, stenter frames, winders, and fabric finishing equipment.',
    automationBenefits: {
      machineControl: 'Tension control algorithms in AC drives prevent yarn breakage during high-speed winding and unwinding.',
      productivity: 'Automated bobbin change and synchronized roller speeds maximize fabric production throughput.',
      monitoring: 'Display yarn speed (m/min), total length meters, and temperature profiles across heating zones.',
      reliability: 'Conformal-coated circuit boards protect electronics against lint buildup and humid dye house ambient conditions.',
      downtimeReduction: 'Rapid troubleshooting through structured HMI alarms for thread break or sensor obstruction.',
      energyEfficiency: 'High efficiency AC VFDs reduce reactive power consumption across large multi-motor stenter frames.'
    },
    recommendedComponents: ['Tension Control VFD', 'Rotary Encoder', 'DIN Power Supply 24V', 'Conformal Coated PLC'],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'food-processing',
    name: 'Food & Beverage Processing',
    slug: 'food-processing',
    iconName: 'Utensils',
    description: 'Mixing, baking, bottling, canning, dairy processing, freezing, and hygienic packaging lines.',
    automationBenefits: {
      machineControl: 'PID loop control accurately regulates oven heating temperatures, liquid dosing, and pump speeds.',
      productivity: 'Continuous automated batching and liquid filling systems maintain high throughput volume.',
      monitoring: 'HMI recipe management ensures strict compliance with food processing temperature and timing standards.',
      reliability: 'Washdown-resistant IP67/IP69K stainless steel sensors and enclosures.',
      downtimeReduction: 'Intuitive touch controls allow quick machine cleaning routine initiation and diagnostic status checks.',
      energyEfficiency: 'Variable speed drives optimize refrigeration compressor motor loads according to thermal demand.'
    },
    recommendedComponents: ['Hygienic Photoelectric Sensor', 'PID Temperature Module', 'Widescreen Touch HMI', 'Stainless Contactor'],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'water-wastewater',
    name: 'Water & Wastewater Management',
    slug: 'water-wastewater',
    iconName: 'Droplet',
    description: 'Pumping stations, RO filtration plants, sewage treatment plants (STP), and municipal water distribution.',
    automationBenefits: {
      machineControl: 'Multi-pump cascade control automatically turns auxiliary pumps on or off based on pipe header pressure.',
      productivity: 'Unattended 24/7 automated pumping operations with GSM/Ethernet remote telemetry alert capabilities.',
      monitoring: 'Continuous tracking of flow rates (m3/hr), pressure levels (bar), tank levels, and motor running hours.',
      reliability: 'Heavy-duty surge protection and industrial switchgear safeguard equipment from lightning and voltage spikes.',
      downtimeReduction: 'Automatic pump rotation spreads operating hours evenly, preventing bearing seizure from prolonged inactivity.',
      energyEfficiency: 'VFD motor speed regulation yields substantial energy savings compared to mechanical throttling valves.'
    },
    recommendedComponents: ['Pump Control VFD', 'Pressure Transmitter 4-20mA', 'GSM Remote Gateway', 'DIN Rail Power Supply'],
    imageUrl: '/images/ac_drives.jpg'
  },
  {
    id: 'material-handling',
    name: 'Material Handling & Logistics',
    slug: 'material-handling',
    iconName: 'Truck',
    description: 'Automated warehouses, sorting systems, overhead cranes, hoists, and AGVs.',
    automationBenefits: {
      machineControl: 'Smooth acceleration and deceleration ramps prevent load swing on cranes and conveyor transfer units.',
      productivity: 'Fast package scanning and automated diverter gates speed up distribution logistics sorting.',
      monitoring: 'Real-time conveyor section occupancy display and emergency stop loop status monitoring.',
      reliability: 'Heavy-duty optical sensors with long sensing distance and high ambient light immunity.',
      downtimeReduction: 'Quick disconnect connectors allow field replacing damaged sensors without control panel rewiring.',
      energyEfficiency: 'Braking energy regeneration and sleep modes during conveyor low-traffic intervals.'
    },
    recommendedComponents: ['Long-Distance Photoelectric Sensor', 'Crane Duty VFD', 'Safety Relay Module', 'Wireless I/O Module'],
    imageUrl: '/images/industrial_sensors.jpg'
  },
  {
    id: 'machine-building',
    name: 'Machine Building (OEMs)',
    slug: 'machine-building',
    iconName: 'Wrench',
    description: 'Special Purpose Machines (SPM), hydraulic presses, plastic injection molding, and assembly machine OEMs.',
    automationBenefits: {
      machineControl: 'Complete integrated automation architecture from PLC, HMI, VFD to servo motion.',
      productivity: 'High-speed I/O response time permits precise part placement and rapid hydraulic valve actuation.',
      monitoring: 'Customized HMI screens displaying machine cycle times, part counter, and operational setup guides.',
      reliability: 'Standardized global brand components ensure international machine export compliance and spare parts availability.',
      downtimeReduction: 'Comprehensive fault code display directly pinpoints malfunctioning switches or over-current conditions.',
      energyEfficiency: 'Servo-driven hydraulic pumps draw power only when pressure output is actively required.'
    },
    recommendedComponents: ['Compact Controller PLC', 'High-Res Touch Panel', 'AC Servo Set', 'Solid State Relays'],
    imageUrl: '/images/servo_motors.jpg'
  },
  {
    id: 'process-industries',
    name: 'Process Industries (Chemical & Pharma)',
    slug: 'process-industries',
    iconName: 'FlaskConical',
    description: 'Chemical reactors, pharmaceutical batching, boiler control, and environmental scrubbers.',
    automationBenefits: {
      machineControl: 'Multi-loop PID temperature, pressure, and flow control maintaining tight process tolerances.',
      productivity: 'Automated sequential batching minimizes human error in chemical ingredient proportioning.',
      monitoring: 'Historical data logging and trend display on HMI touch screens for audit trail compliance.',
      reliability: 'Intrinsic safety barriers and robust switchgear protect control panels in hazardous area zones.',
      downtimeReduction: 'Self-diagnostic sensor loops flag out-of-spec calibration before batch corruption occurs.',
      energyEfficiency: 'Modulated burner fan VFD drives optimize combustion air-to-fuel ratios for fuel conservation.'
    },
    recommendedComponents: ['Process Control PLC', 'PID Loop Controllers', 'IS Barrier Modules', 'Signal Isolators'],
    imageUrl: '/images/plc_controllers.jpg'
  }
];
